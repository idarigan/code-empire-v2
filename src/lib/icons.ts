/**
 * Code Empire — Icon registry
 *
 * Every icon used in the app is exported from here.
 * Wrap Lucide components so pages never import lucide-react directly.
 */

import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  Bell,
  Book,
  BookOpen,
  Bookmark,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  Code2,
  Compass,
  Copy,
  Cpu,
  Crown,
  Download,
  ExternalLink,
  Eye,
  Facebook,
  FileText,
  Filter,
  Flame,
  Gamepad2,
  Github,
  Globe,
  GraduationCap,
  Home,
  Info,
  Instagram,
  Languages,
  LayoutDashboard,
  Linkedin,
  Loader2,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Palette,
  Phone,
  Play,
  Plus,
  Quote,
  Rocket,
  Search,
  Send,
  Settings,
  Share2,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Target,
  Trash2,
  TrendingUp,
  Trophy,
  Twitter,
  User,
  UserCheck,
  Users,
  X,
  Youtube,
  Zap,
} from "lucide-react";

export const Icons = {
  // Navigation
  home: Home,
  compass: Compass,
  dashboard: LayoutDashboard,
  settings: Settings,

  // User
  user: User,
  userCheck: UserCheck,
  users: Users,
  logout: LogOut,
  lock: Lock,

  // Content
  book: Book,
  bookOpen: BookOpen,
  bookmark: Bookmark,
  fileText: FileText,
  mail: Mail,

  // Achievement
  award: Award,
  trophy: Trophy,
  crown: Crown,
  star: Star,
  sparkles: Sparkles,
  flame: Flame,
  rocket: Rocket,
  graduation: GraduationCap,

  // Code / tech
  code: Code2,
  cpu: Cpu,
  gamepad: Gamepad2,
  globe: Globe,

  // Charts / stats
  chart: BarChart3,
  activity: Activity,
  trending: TrendingUp,
  target: Target,
  zap: Zap,

  // Actions
  search: Search,
  filter: Filter,
  download: Download,
  share: Share2,
  copy: Copy,
  externalLink: ExternalLink,
  plus: Plus,
  trash: Trash2,
  send: Send,
  play: Play,
  eye: Eye,
  quote: Quote,

  // Arrows / chevrons
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,

  // System
  bell: Bell,
  palette: Palette,
  languages: Languages,
  moon: Moon,
  sun: Sun,
  loader: Loader2,
  menu: Menu,
  close: X,

  // Info / status
  info: Info,
  check: CheckCircle2,
  shield: Shield,
  shieldCheck: ShieldCheck,

  // Contact
  phone: Phone,
  mapPin: MapPin,
  messageCircle: MessageCircle,
  calendar: Calendar,
  clock: Clock,
  briefcase: Briefcase,
  building: Building2,

  // Social
  github: Github,
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
} as const;

export type IconName = keyof typeof Icons;
