
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function getCareerRecommendation(interests: string[], experience: string, goals: string) {
  const model = 'gemini-3-flash-preview';
  const prompt = `
    As a senior IT career consultant at "Sparkle", recommend one specific IT domain and two subdomains for a user.
    User Interests: ${interests.join(', ')}
    Experience: ${experience}
    Goals: ${goals}

    Provide the response in a structured JSON format matching this schema:
    {
      "recommendedDomain": "Domain Name",
      "reasoning": "Why this fits the user",
      "subdomains": [
        { "name": "Subdomain Name", "description": "Brief why" }
      ],
      "firstStep": "One actionable task"
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedDomain: { type: Type.STRING },
            reasoning: { type: Type.STRING },
            subdomains: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  description: { type: Type.STRING }
                }
              }
            },
            firstStep: { type: Type.STRING }
          },
          required: ["recommendedDomain", "reasoning", "subdomains", "firstStep"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini recommendation error:", error);
    return null;
  }
}

export async function getCuratedCourses(subdomain: string, domain: string) {
  // Using 2.5-flash as it is the most stable/current model for this
  const model = 'gemini-2.5-flash'; 
  const prompt = `Recommend the top 5 specific, highly-rated courses or learning resources for someone pursuing a career in ${subdomain} (within the ${domain} domain). 
  Base this on actual reviews and employer preferences across popular platforms like Coursera, Udemy, edX, or YouTube. 
  Provide real-world course titles.`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { 
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "The exact name of the course or video" },
              platform: { type: Type.STRING, description: "The platform (e.g., Coursera, Udemy, YouTube)" },
              description: { type: Type.STRING, description: "A short 1-sentence description of why it's recommended" }
            },
            required: ["title", "platform", "description"]
          }
        }
      }
    });
    return JSON.parse(response.text || '[]');
  } catch (error) {
    console.error("Gemini course error:", error);
    return [];
  }
}

export async function getChatResponse(message: string, context?: any) {
  const model = 'gemini-3-flash-preview';
  const response = await ai.models.generateContent({
    model,
    contents: `User message: ${message}\nContext: ${JSON.stringify(context || {})}`,
    config: {
      systemInstruction: "You are Sparky, the career guidance AI for the platform 'Sparkle'. You help users discover IT paths based on the 12 domains: Software Dev, Data, AI/ML, Cybersecurity, Cloud, Networking, Design, Hardware, QA, Support, Tech Mgmt, and Emerging Fields. Be encouraging, concise, and professional."
    }
  });
  return response.text;
}
