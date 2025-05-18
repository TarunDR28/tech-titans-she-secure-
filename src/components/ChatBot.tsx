import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Message {
  content: string | React.ReactNode;
  sender: 'user' | 'bot';
}

interface FAQItem {
  question: string;
  answer: string;
}

/* ---------- FAQ Data ---------- */
const faq: FAQItem[] = [
  { question: 'What is a contract?', answer: 'A contract is a legally binding agreement between two or more parties.' },
  { question: 'How do I apply for a patent?', answer: 'You need to file an application with the patent office including a description of your invention.' },
  { question: 'How do I update my computer’s operating system?', answer: 'On Windows, go to Settings › Windows Update; on macOS, System Settings › General › Software Update, then Download & Install.' },

  // 10 legal-rights Q&A (add more answers as you like)
  { question: 'What are my rights if I’m arrested?', answer: 'You have the right to remain silent, to be informed of the charges, and to consult a lawyer.' },
  { question: 'What are tenant rights regarding security deposits?', answer: 'Landlords must return deposits—minus lawful deductions—within the time limit set by local law.' },
  { question: 'Do employees have a right to overtime pay?', answer: 'Most hourly workers are entitled to overtime (often 1.5× wage) for hours worked beyond statutory limits.' },
  { question: 'What rights do consumers have when a product is defective?', answer: 'You can request repair, replacement, or refund under consumer-protection law.' },
  { question: 'What is the right to information (RTI) in India?', answer: 'RTI lets any citizen request information from public authorities to promote transparency.' },
  { question: 'Can I record a phone call legally?', answer: 'Legality varies—some regions need consent from every participant, others only one party.' },
  { question: 'What privacy rights do I have online?', answer: 'Data laws (e.g., GDPR) grant rights to access, correct, delete, and control your personal data.' },
  { question: 'What rights does a copyright owner have?', answer: 'The owner may reproduce, distribute, perform, display, and create derivative works.' },
  { question: 'Do I have the right to refuse a police search of my home?', answer: 'Yes—unless officers have a valid warrant or exigent circumstances. Ask to see the warrant.' },
  { question: 'What are my rights when stopped by traffic police?', answer: 'You may ask for ID, be told the violation, request an official receipt, and usually pay digitally.' }
];

/* ---------- Fuse.js ---------- */
const fuse = new Fuse(faq, {
  keys: ['question'],
  includeScore: true,
  threshold: 0.4
});

/* ---------- Component ---------- */
const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');

  // starter list (first 10 FAQ questions)
  const starterQs = faq.slice(0, 10).map((f) => f.question);

  const [messages, setMsgs] = useState<Message[]>([
    {
      sender: 'bot',
      content: (
        <div>
          <p>Hello! I'm Shakti Bot. Ask me any legal or financial question, or tap one of these to begin:</p>
          <ul className="mt-2 space-y-2">
            {starterQs.map((q) => (
              <li key={q}>
                <button
                  className="text-brand-purple underline hover:text-brand-purple-dark"
                  onClick={(ev) => {
                    ev.preventDefault();
                    handleSend(ev, q);
                  }}
                >
                  {q}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    }
  ]);

  /* ---- send / search ---- */
  const handleSend = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
    questionText?: string
  ) => {
    e.preventDefault();
    const query = questionText ?? input.trim();
    if (!query) return;

    const userMsg: Message = { content: query, sender: 'user' };
    setMsgs((prev) => [...prev, userMsg, { content: '⋯', sender: 'bot' }]);
    setInput('');

    const results = fuse.search(query);
    let answer: React.ReactNode = "Sorry, I don't have an answer for that. Please try asking differently.";

    if (results.length) {
      const best = results[0];
      if (best.score !== undefined && best.score < 0.5) {
        answer = best.item.answer;
      } else {
        const suggestions = results.slice(0, 4).map((r) => r.item.question);
        answer = (
          <div>
            <p>Sorry, I couldn't find an exact answer. Did you mean one of these?</p>
            <ul className="mt-2 space-y-2">
              {suggestions.map((q) => (
                <li key={q}>
                  <button
                    className="text-brand-purple underline hover:text-brand-purple-dark"
                    onClick={(ev) => {
                      ev.preventDefault();
                      handleSend(ev, q);
                    }}
                  >
                    {q}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        );
      }
    }

    setTimeout(() => {
      setMsgs((prev) => [...prev.slice(0, -1), { content: answer, sender: 'bot' }]);
    }, 800);
  };

  /* ---------- UI ---------- */
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          className="rounded-full w-14 h-14 shadow-lg bg-brand-purple hover:bg-brand-purple-dark flex items-center justify-center"
          onClick={() => setIsOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className="lucide lucide-message-square">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </Button>
      )}

      {isOpen && (
        <Card className="w-80 sm:w-96 h-[500px] flex flex-col shadow-xl animate-fade-in">
          <CardHeader className="bg-brand-purple text-white py-3 px-4 flex justify-between items-center">
            <CardTitle className="text-lg">Shakti Legal Assistant</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-white hover:bg-brand-purple-dark h-8 w-8"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                   className="lucide lucide-x">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </Button>
          </CardHeader>

          <CardContent className="flex-grow overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[80%] p-3 rounded-lg ${
                  m.sender === 'user'
                    ? 'bg-brand-purple text-white self-end rounded-br-none'
                    : 'bg-gray-100 text-gray-800 self-start rounded-bl-none'
                }`}
              >
                {m.content}
              </div>
            ))}
          </CardContent>

          <CardFooter className="p-3 border-t">
            <form onSubmit={handleSend} className="w-full flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything..."
                className="flex-grow"
                autoFocus
              />
              <Button type="submit" className="bg-brand-purple hover:bg-brand-purple-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-arrow-right">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default ChatBot;
