'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Linkedin,
  Brain,
  Sparkles,
  MessageSquare,
  Lightbulb,
  Zap,
  Bot,
  Cpu,
  Workflow,
  Code2,
  Network,
  Cog,
  Database,
  Globe,
  Search,
  Terminal,
  FileCode,
  Layers,
  Shield,
  Eye,
  Wand2,
  Blocks,
  CircuitBoard,
  Binary
} from 'lucide-react';

// Create a grid of icons across the entire background
const iconComponents = [Brain, Sparkles, MessageSquare, Lightbulb, Zap, Bot, Cpu, Workflow, Code2, Network, Cog, Database, Globe, Search, Terminal, FileCode, Layers, Shield, Eye, Wand2, Blocks, CircuitBoard, Binary];

const icons = [
  // Row 1 (top)
  { Icon: Brain, top: '2%', left: '5%', size: 24 },
  { Icon: Sparkles, top: '4%', left: '20%', size: 20 },
  { Icon: Zap, top: '2%', left: '35%', size: 22 },
  { Icon: Cpu, top: '5%', left: '50%', size: 18 },
  { Icon: Lightbulb, top: '3%', left: '65%', size: 24 },
  { Icon: Code2, top: '4%', left: '80%', size: 20 },
  { Icon: Bot, top: '2%', left: '92%', size: 22 },
  // Row 2
  { Icon: Network, top: '12%', left: '3%', size: 22 },
  { Icon: Cog, top: '14%', left: '15%', size: 18 },
  { Icon: Database, top: '11%', left: '28%', size: 24 },
  { Icon: Globe, top: '13%', left: '42%', size: 20 },
  { Icon: Shield, top: '12%', left: '58%', size: 22 },
  { Icon: Eye, top: '14%', left: '72%', size: 18 },
  { Icon: Wand2, top: '11%', left: '85%', size: 24 },
  // Row 3
  { Icon: Workflow, top: '22%', left: '8%', size: 20 },
  { Icon: Blocks, top: '24%', left: '22%', size: 22 },
  { Icon: CircuitBoard, top: '21%', left: '38%', size: 18 },
  { Icon: Binary, top: '23%', left: '52%', size: 24 },
  { Icon: Search, top: '22%', left: '68%', size: 20 },
  { Icon: Terminal, top: '24%', left: '82%', size: 22 },
  // Row 4
  { Icon: FileCode, top: '32%', left: '2%', size: 24 },
  { Icon: Layers, top: '34%', left: '18%', size: 18 },
  { Icon: Brain, top: '31%', left: '32%', size: 20 },
  { Icon: Sparkles, top: '33%', left: '70%', size: 22 },
  { Icon: Zap, top: '32%', left: '88%', size: 24 },
  // Row 5 (middle-ish, sparse near center)
  { Icon: Cpu, top: '42%', left: '5%', size: 22 },
  { Icon: Lightbulb, top: '44%', left: '20%', size: 18 },
  { Icon: Bot, top: '43%', left: '82%', size: 20 },
  { Icon: Network, top: '41%', left: '92%', size: 24 },
  // Row 6
  { Icon: Cog, top: '52%', left: '3%', size: 20 },
  { Icon: Database, top: '54%', left: '15%', size: 24 },
  { Icon: Globe, top: '51%', left: '85%', size: 18 },
  { Icon: Shield, top: '53%', left: '95%', size: 22 },
  // Row 7
  { Icon: Eye, top: '62%', left: '6%', size: 24 },
  { Icon: Wand2, top: '64%', left: '22%', size: 20 },
  { Icon: Workflow, top: '61%', left: '78%', size: 22 },
  { Icon: Blocks, top: '63%', left: '90%', size: 18 },
  // Row 8
  { Icon: CircuitBoard, top: '72%', left: '2%', size: 22 },
  { Icon: Binary, top: '74%', left: '18%', size: 18 },
  { Icon: Search, top: '71%', left: '32%', size: 24 },
  { Icon: Terminal, top: '73%', left: '68%', size: 20 },
  { Icon: FileCode, top: '72%', left: '84%', size: 22 },
  // Row 9
  { Icon: Layers, top: '82%', left: '8%', size: 18 },
  { Icon: Brain, top: '84%', left: '25%', size: 22 },
  { Icon: Sparkles, top: '81%', left: '42%', size: 20 },
  { Icon: Zap, top: '83%', left: '58%', size: 24 },
  { Icon: Cpu, top: '82%', left: '75%', size: 18 },
  { Icon: Lightbulb, top: '84%', left: '92%', size: 22 },
  // Row 10 (bottom)
  { Icon: Bot, top: '92%', left: '5%', size: 20 },
  { Icon: Network, top: '94%', left: '20%', size: 24 },
  { Icon: Cog, top: '91%', left: '35%', size: 18 },
  { Icon: Database, top: '93%', left: '50%', size: 22 },
  { Icon: Globe, top: '92%', left: '65%', size: 20 },
  { Icon: Shield, top: '94%', left: '80%', size: 24 },
  { Icon: Eye, top: '91%', left: '93%', size: 18 },
];

export default function HomePage() {
  return (
    <div className="relative flex-1 flex flex-col justify-center items-center text-center h-full px-4 overflow-hidden">
      {/* Background Icons */}
      {icons.map(({ Icon, top, left, right, size }, index) => (
        <Icon
          key={index}
          size={size}
          className="absolute text-gray-400 dark:text-gray-600 opacity-30"
          style={{ top, left, right }}
        />
      ))}
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        AI Without the Overwhelm
      </h1>

      <Link
        href="/docs"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors mb-12"
      >
        Get Started
      </Link>

      <div className="flex flex-col items-center gap-3">
        <div className="relative w-24 h-24 rounded-full ring-4 ring-blue-500 ring-offset-2 ring-offset-black overflow-hidden">
          <Image
            src="/images/mazin.jpg"
            alt="Mazin Salim"
            fill
            className="object-cover scale-[2.5] translate-y-[70%] translate-x-[10%]"
          />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Mazin Salim
        </p>
        <a
          href="https://www.linkedin.com/in/mazinsalim1/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 py-2 px-4 rounded-lg transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          <span className="text-sm">LinkedIn Profile</span>
        </a>
      </div>
    </div>
  );
}
