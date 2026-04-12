import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  try {
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseAnonKey) {
      return res.status(500).json({ error: 'Configuração do banco de dados ausente.' });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    
    // Lê apenas 1 id para causar tráfego de rede ínfimo na tabela 
    // É o suficiente para anular o contador de 7 dias de inatividade de graça.
    const { data, error } = await supabase
      .from('leads')
      .select('id')
      .limit(1);

    if (error) {
      console.error('Erro de leitura do Supabase:', error);
      return res.status(500).json({ error: 'Não foi possível ler os leads.' });
    }

    res.status(200).json({
      success: true,
      message: 'Keepalive realizado com sucesso! O banco está blindado contra standby.',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Erro de Handler:', error);
    res.status(500).json({ error: 'Ocorreu uma falha no sistema interno.' });
  }
}
