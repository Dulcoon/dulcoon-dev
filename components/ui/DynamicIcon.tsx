import React from "react";
import {
  Sparkles,
  Shield,
  ShieldCheck,
  Mic,
  Receipt,
  User,
  CreditCard,
  LayoutDashboard,
  CheckCircle2,
  Package,
  QrCode,
  Bell,
  Calendar,
  Brain,
  Trophy,
  Box,
  Bot,
  FileText,
  Home,
  Image,
  FileSignature,
  ShoppingCart,
  Zap,
  Terminal,
  Smartphone,
  Database,
  Headphones,
  Lock,
  ExternalLink,
  Globe,
  Star,
  Heart,
  Cpu,
  Server,
  Cloud,
  Mail,
  Settings,
  Search,
  Folder,
  RotateCcw,
  TrendingUp,
  Sliders,
  Layers,
  Code2,
  Activity,
  Award,
  BookOpen,
  Briefcase,
  Compass,
  Download,
  Eye,
  Flame,
  Key,
  Laptop,
  Maximize2,
  Monitor,
  PenTool,
  Play,
  Share2,
  Smile,
  Tag,
  Target,
  Users,
  Video,
  Wallet,
  Wrench,
  LucideIcon,
} from "lucide-react";

interface DynamicIconProps {
  name?: string;
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

// Comprehensive mapping from Project Management / Material Symbol names to Lucide SVG Icons
const ICON_MAP: Record<string, LucideIcon> = {
  // AI & Sparkles
  auto_awesome: Sparkles,
  o_awesome: Sparkles,
  awesome: Sparkles,
  sparkles: Sparkles,
  magic: Sparkles,
  ai: Bot,
  smart_toy: Bot,
  robot: Bot,
  psychology: Brain,
  brain: Brain,

  // Security & Verification
  shield: Shield,
  verified_user: ShieldCheck,
  admin_panel_settings: ShieldCheck,
  security: Shield,
  lock: Lock,
  key: Key,

  // Audio & Media
  mic: Mic,
  microphone: Mic,
  video: Video,
  photo_library: Image,
  image: Image,
  gallery: Image,
  play: Play,

  // Commerce & Finance
  price_check: Receipt,
  payments: CreditCard,
  credit_card: CreditCard,
  payment: CreditCard,
  shopping_cart: ShoppingCart,
  cart: ShoppingCart,
  wallet: Wallet,
  tag: Tag,

  // Users & Profiles
  person: User,
  user: User,
  users: Users,
  smile: Smile,

  // Dashboard & Admin
  dashboard_customize: LayoutDashboard,
  dashboard: LayoutDashboard,
  layout: LayoutDashboard,
  inventory: Package,
  package: Package,
  settings: Settings,
  sliders: Sliders,
  filter: Sliders,

  // Scanner & Auth
  qr_code_scanner: QrCode,
  qr_code: QrCode,
  app_registration: FileSignature,
  description: FileText,
  document: FileText,
  file: FileText,

  // Notifications & Calendar
  notifications_active: Bell,
  notifications: Bell,
  bell: Bell,
  calendar_month: Calendar,
  calendar: Calendar,

  // Gamification & 3D
  leaderboard: Trophy,
  trophy: Trophy,
  award: Award,
  view_in_ar: Box,
  ar: Box,
  box: Box,
  target: Target,

  // Real Estate & Places
  villa: Home,
  home: Home,
  house: Home,

  // Performance & Tech
  speed: Zap,
  fast: Zap,
  zap: Zap,
  bolt: Zap,
  flame: Flame,
  terminal: Terminal,
  code: Code2,
  smartphone: Smartphone,
  mobile: Smartphone,
  database: Database,
  server: Server,
  cloud: Cloud,
  cpu: Cpu,
  laptop: Laptop,
  monitor: Monitor,

  // Support & Comms
  support_agent: Headphones,
  support: Headphones,
  headphones: Headphones,
  mail: Mail,
  email: Mail,
  globe: Globe,
  web: Globe,
  link: ExternalLink,
  share: Share2,

  // Actions & Common
  check_circle: CheckCircle2,
  check: CheckCircle2,
  search: Search,
  folder: Folder,
  refresh: RotateCcw,
  rotate_ccw: RotateCcw,
  trending_up: TrendingUp,
  analytics: Activity,
  activity: Activity,
  layers: Layers,
  briefcase: Briefcase,
  book_open: BookOpen,
  compass: Compass,
  download: Download,
  eye: Eye,
  maximize: Maximize2,
  pen_tool: PenTool,
  wrench: Wrench,
  star: Star,
  heart: Heart,
};

export default function DynamicIcon({
  name,
  className = "",
  size = 24,
  style,
}: DynamicIconProps) {
  if (!name) {
    return <Sparkles size={size} className={className} style={style} />;
  }

  // Normalize name: lowercase, trim, replace spaces/hyphens with underscores
  const normalizedKey = name.toLowerCase().trim().replace(/[-\s]+/g, "_");

  // Lookup in icon map
  const IconComponent = ICON_MAP[normalizedKey];

  if (IconComponent) {
    return <IconComponent size={size} className={className} style={style} />;
  }

  // Fallback 1: try matching without prefixes (e.g., "o_awesome" -> "awesome" -> Sparkles)
  const cleanedKey = normalizedKey.replace(/^[a-z]_/, "");
  if (ICON_MAP[cleanedKey]) {
    const FallbackComponent = ICON_MAP[cleanedKey];
    return <FallbackComponent size={size} className={className} style={style} />;
  }

  // Fallback 2: Render Material Symbols font span, but styled safely
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontSize: `${size}px`,
        width: `${size}px`,
        height: `${size}px`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: 1,
        overflow: "hidden",
        ...style,
      }}
    >
      {name}
    </span>
  );
}
