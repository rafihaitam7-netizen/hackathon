import { OpenAI } from 'openai';

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com/v1',
  apiKey: process.env.DEEPSEEK_API_KEY, 
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: `Tu es l'assistant de premier niveau pour "Med Assurance" au Maroc. 
RÈGLES STRICTES :
1. Tu ne dois JAMAIS te prononcer sur la responsabilité, la couverture du contrat, ou les indemnisations.
2. Si l'utilisateur mentionne des blessés (ex: accident à Marrakech avec blessure), ARRÊTE immédiatement la collecte d'informations. Réponds UNIQUEMENT : "URGENCE DÉTECTÉE : Veuillez contacter immédiatement les secours au 15 (Ambulance) et notre assistance médicale au 05 22 54 55 55. Un agent humain prend le relais."
3. Pour un accident matériel simple (ex: Casablanca), demande juste si le constat amiable est rempli.
4. Reste factuel, calme et aide le client à retrouver son contexte sans stress.`
        },
        { role: 'user', content: message }
      ],
    });

    return Response.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error('Chat API Error:', error);
    return Response.json({ error: 'Failed to fetch AI response' }, { status: 500 });
  }
}