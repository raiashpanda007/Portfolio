import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  ChevronDown,
  Menu,
  Rocket,
  TrendingUp,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiAmazon,
  SiCloudflare,
  SiGithubactions,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiLinux,
  SiRedis,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiReact,
  SiNodedotjs,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiPrisma,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiOpenai,
  SiLangchain,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { TbRobot } from "react-icons/tb";
import { FaVectorSquare } from "react-icons/fa";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState("devops");
  const experienceAnim = useScrollAnimation();
  const projectsAnim = useScrollAnimation();
  const upcomingAnim = useScrollAnimation();
  const skillsAnim = useScrollAnimation();
  const leadershipAnim = useScrollAnimation();
  const contactAnim = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative noise-overlay">
      {/* Floating gradient orbs - riverline style */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-violet-500/15 via-fuchsia-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/5 to-transparent rounded-full blur-3xl" />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "glass shadow-lg"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl gradient-text">Ashwin Rai</div>

            <nav className="hidden md:flex items-center gap-8">
              {["experience", "projects", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-underline capitalize"
                  data-testid={`link-${item}`}
                >
                  {item}
                </button>
              ))}
              <a
                href="/attached_assets/ASHWIN_RAI_RESUME_1764173357171.pdf"
                download
                data-testid="button-download-resume"
              >
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Resume
                </Button>
              </a>
            </nav>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 glass">
                <SheetTitle className="text-xl font-bold mb-2 gradient-text">
                  Navigation
                </SheetTitle>
                <nav className="flex flex-col gap-6 mt-8">
                  {["experience", "projects", "skills", "contact"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors capitalize"
                      data-testid={`mobile-link-${item}`}
                    >
                      {item}
                    </button>
                  ))}
                  <a
                    href="/attached_assets/ASHWIN_RAI_RESUME_1764173357171.pdf"
                    download
                    className="w-full"
                    data-testid="mobile-button-download-resume"
                  >
                    <Button variant="outline" className="w-full">
                      Download Resume
                    </Button>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section - Riverline inspired */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="text-center space-y-8">
            {/* Subtle badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Available for opportunities
              </span>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]"
                data-testid="text-hero-title"
              >
                <span className="gradient-text">Software Engineer</span>
                <br />
                <span className="text-foreground/90">DevOps & GenAI</span>
              </h1>
            </div>

            {/* Metrics - prominent display */}
            <div className="flex flex-wrap items-center justify-center gap-8 py-6">
              {[
                { value: "900+", label: "Commits" },
                { value: "99%", label: "Uptime" },
                { value: "2,000+", label: "Users Impacted" },
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="metric-number text-4xl sm:text-5xl gradient-text">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <p
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              data-testid="text-hero-description"
            >
              GoLang and Node.js dev building scalable systems with cloud-native infrastructure.
              Specialized in DevOps automation, GenAI integration, and full-stack
              development with a track record of reducing latency and deploying
              products used by thousands.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="gap-2 glow-primary"
                data-testid="button-view-projects"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </Button>
              <a
                href="mailto:ashwin.2201098cs@iiitbh.ac.in"
                data-testid="button-contact-me"
              >
                <Button size="lg" variant="outline" className="gap-2">
                  Get in Touch
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 pt-8">
              {[
                { icon: Github, href: "https://github.com/raiashpanda007", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ashwin-rai-22473a257", label: "LinkedIn" },
                { icon: Mail, href: "mailto:ashwin.2201098cs@iiitbh.ac.in", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:bg-primary/10 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <button
              onClick={() => scrollToSection("experience")}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
              data-testid="button-scroll-down"
            >
              <span className="text-sm">Explore</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section
        id="experience"
        ref={experienceAnim.ref}
        className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${experienceAnim.isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              data-testid="text-experience-title"
            >
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building impactful solutions and driving technical excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card
              className="p-8 hover-elevate transition-all duration-300"
              data-testid="card-experience-weecom"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-2xl font-semibold">Weecom</h3>
                    <p className="text-lg text-muted-foreground">
                      Backend Developer Intern
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    June 2025 – Sep 2025
                  </Badge>
                </div>
                <ul className="space-y-3 text-base leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>
                      Collaborated on an internal tool with{" "}
                      <strong>Django REST Framework</strong>, automating
                      invoice, onboarding and reporting workflows to reduce
                      manual effort by{" "}
                      <strong className="text-foreground">40%</strong> across
                      company operations
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>
                      Integrated <strong>Celery</strong> for resilient
                      background processing (PDF generation, email/SMS
                      notifications, retry logic), handling{" "}
                      <strong className="text-foreground">
                        300+ daily tasks
                      </strong>{" "}
                      and improving throughput under peak load
                    </span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card
              className="p-8 hover-elevate transition-all duration-300"
              data-testid="card-experience-jorte"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-2xl font-semibold">Jorte</h3>
                    <p className="text-lg text-muted-foreground">SDE Intern</p>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    March 2025 – July 2025
                  </Badge>
                </div>
                <ul className="space-y-3 text-base leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>
                      Reduced API latency by{" "}
                      <strong className="text-foreground">17%</strong> through{" "}
                      <strong>Redis caching</strong>, query refactors and
                      paginated endpoints for user-facing search and data-heavy
                      routes during load tests
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>
                      Launched a career-counseling service used by{" "}
                      <strong className="text-foreground">
                        8,000+ students
                      </strong>
                      , adding scheduled mailers, activity tracking and A/B
                      experiments to boost engagement and response rates
                    </span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="projects"
        ref={projectsAnim.ref}
        className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30 transition-all duration-1000 ${projectsAnim.isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              data-testid="text-projects-title"
            >
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building scalable solutions from cloud IDEs to real-time
              multiplayer platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className="p-8 hover-elevate transition-all duration-300 flex flex-col overflow-hidden relative group"
              data-testid="card-project-devzen"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="space-y-4 flex-1 relative">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">DevZEN</h3>
                  <p className="text-sm text-muted-foreground">
                    March 2025 – August 2025
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Monaco</Badge>
                  <Badge variant="secondary">CRDT</Badge>
                  <Badge variant="secondary">WebSockets</Badge>
                  <Badge variant="secondary">S3</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                </div>

                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Built a cloud collaborative IDE enabling concurrent editing
                    across{" "}
                    <strong className="text-foreground">
                      50+ active projects
                    </strong>{" "}
                    with low-latency sync
                  </p>
                  <p>
                    Designed Kubernetes deployment with isolated pods,
                    autoscaling workers achieving{" "}
                    <strong className="text-foreground">
                      1.2s cold-starts
                    </strong>{" "}
                    and{" "}
                    <strong className="text-foreground">
                      30% lower infra cost
                    </strong>
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-6 relative">
                <a
                  href="https://web.devzen.ashprojects.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  data-testid="link-devzen-live"
                >
                  <Button size="sm" className="w-full gap-2">
                    <ArrowRight className="w-4 h-4" /> Live Demo
                  </Button>
                </a>
                <a
                  href="https://github.com/ashwinrai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  data-testid="link-devzen-github"
                >
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Github className="w-4 h-4" /> GitHub
                  </Button>
                </a>
              </div>
            </Card>

            <Card
              className="p-8 hover-elevate transition-all duration-300 flex flex-col overflow-hidden relative group"
              data-testid="card-project-chess"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="space-y-4 flex-1 relative">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Chess-Royale</h3>
                  <p className="text-sm text-muted-foreground">
                    December 2024 – January 2025
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Turborepo</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">WebSockets</Badge>
                </div>

                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Created a real-time multiplayer chess platform with
                    WebSockets supporting{" "}
                    <strong className="text-foreground">
                      300+ participants
                    </strong>{" "}
                    and{" "}
                    <strong className="text-foreground">1,000+ matches</strong>
                  </p>
                  <p>
                    Deployed via CI/CD and Nginx on AWS EC2 maintaining{" "}
                    <strong className="text-foreground">99.99% uptime</strong>{" "}
                    and supporting{" "}
                    <strong className="text-foreground">
                      500+ concurrent users
                    </strong>
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-6 relative">
                <a
                  href="https://web.chesssroyale.games"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  data-testid="link-chess-live"
                >
                  <Button size="sm" className="w-full gap-2">
                    <ArrowRight className="w-4 h-4" /> Live Demo
                  </Button>
                </a>
                <a
                  href="https://github.com/ashwinrai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  data-testid="link-chess-github"
                >
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Github className="w-4 h-4" /> GitHub
                  </Button>
                </a>
              </div>
            </Card>

            <Card
              className="p-8 hover-elevate transition-all duration-300 flex flex-col overflow-hidden relative group"
              data-testid="card-project-uniblogic"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="space-y-4 flex-1 relative">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">UniBLOGic</h3>
                  <p className="text-sm text-muted-foreground">
                    July 2024 – November 2024
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">ECS and ECR </Badge>
                  <Badge variant="secondary">SQS</Badge>
                  <Badge variant="secondary">Lambda Functions</Badge>
                </div>

                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Developed a college community platform with real-time chat
                    adopted by{" "}
                    <strong className="text-foreground">
                      500+ active users
                    </strong>{" "}
                    across campus organizations
                  </p>
                  <p>
                    Implemented a microservice video pipeline cutting costs by{" "}
                    <strong className="text-foreground">30%</strong> and
                    improving delivery speed by{" "}
                    <strong className="text-foreground">25%</strong> for 250+
                    videos
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-6 relative">
                <a
                  href="https://github.com/raiashpanda007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  data-testid="link-uniblogic-github"
                >
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Github className="w-4 h-4" /> GitHub
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section
        ref={upcomingAnim.ref}
        className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 transition-all duration-1000 ${upcomingAnim.isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-2"
              data-testid="badge-upcoming"
            >
              <Rocket className="w-4 h-4 mr-2 inline" />
              Coming Soon
            </Badge>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              data-testid="text-upcoming-title"
            >
              Upcoming Project
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building the next generation of sports entertainment
            </p>
          </div>

          <Card
            className="overflow-hidden relative group"
            data-testid="card-upcoming-project"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">Sports Exchange</h3>
                      <p className="text-muted-foreground">
                        Fantasy Sports & Betting Platform
                      </p>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed text-muted-foreground">
                    <p>
                      A next-gen sports exchange where users trade{" "}
                      <strong>team stocks</strong> and use those same assets to
                      place bets. Prices move on pure{" "}
                      <strong>market supply–demand</strong>, letting users earn
                      from both trading and smart betting decisions.
                    </p>

                    <p>
                      The platform is engineered for{" "}
                      <strong>negligible latency</strong>, real-time updates,
                      and <strong>zero downtime</strong>. The backend focuses on{" "}
                      <strong>durability</strong>, <strong>consistency</strong>,
                      and seamless execution under high concurrency.
                    </p>

                    <p>
                      Built with a modern stack optimized for scalability and a
                      smooth, uninterrupted user experience even during peak
                      match hours.
                    </p>
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "GoLang",
                      "Microservices",
                      "Redis",
                      "WebSockets",
                      "Kafka",
                      "Kubernetes",
                    ].map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button
                      disabled
                      className="gap-2"
                      data-testid="button-sports-exchange"
                    >
                      <Rocket className="w-4 h-4" /> In Development
                    </Button>
                    <Button variant="outline" disabled>
                      Stay Tuned
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 flex items-center justify-center border border-primary/10">
                    <div className="text-center space-y-4 p-8">
                      <div className="text-6xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                        SE
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground font-medium">
                          Expected Launch
                        </p>
                        <p className="text-xl font-semibold">Q2 2026</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl animate-pulse" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-accent/10 blur-2xl animate-pulse delay-700" />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-border">
                {[
                  { label: "Real-time Odds", value: "Live" },
                  { label: "Sports Covered", value: "Football" },
                  { label: "Platform", value: "Web" },
                  { label: "Security", value: "Enterprise" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section
        id="skills"
        ref={skillsAnim.ref}
        className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${skillsAnim.isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              data-testid="text-skills-title"
            >
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expertise across DevOps, Software Engineering, and AI/ML
              technologies
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <Select
              value={activeSkillCategory}
              onValueChange={setActiveSkillCategory}
            >
              <SelectTrigger className="w-[280px] h-14 glass text-lg font-medium border-primary/20 focus:ring-primary/50">
                <SelectValue placeholder="Select Technology" />
              </SelectTrigger>
              <SelectContent className="glass border-primary/20">
                <SelectItem value="devops" className="text-base py-3 cursor-pointer">DevOps & Cloud</SelectItem>
                <SelectItem value="software" className="text-base py-3 cursor-pointer">Software Engineering</SelectItem>
                <SelectItem value="ai" className="text-base py-3 cursor-pointer">AI & GenAI</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="min-h-[400px] transition-all duration-500 ease-in-out">
            {activeSkillCategory === "devops" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Card className="p-8 glass border-primary/10">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {[
                      { name: "Docker", icon: SiDocker, color: "#2496ED" },
                      {
                        name: "Kubernetes",
                        icon: SiKubernetes,
                        color: "#326CE5",
                      },
                      { name: "Nginx", icon: SiNginx, color: "#009639" },
                      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
                      {
                        name: "Cloudflare",
                        icon: SiCloudflare,
                        color: "#F38020",
                      },
                      {
                        name: "GitHub Actions",
                        icon: SiGithubactions,
                        color: "#2088FF",
                      },
                      { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
                      {
                        name: "Prometheus",
                        icon: SiPrometheus,
                        color: "#E6522C",
                      },
                      { name: "Grafana", icon: SiGrafana, color: "#F46800" },
                      { name: "Linux", icon: SiLinux, color: "#FCC624" },
                    ].map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center gap-3 p-4 rounded-lg hover-elevate transition-all duration-200 bg-muted/30 hover:bg-primary/10 border border-transparent hover:border-primary/20"
                        data-testid={`skill-devops-${skill.name
                          .toLowerCase()
                          .replace(/\s/g, "-")}`}
                      >
                        <skill.icon
                          className="w-10 h-10"
                          style={{ color: skill.color }}
                        />
                        <span className="text-sm font-medium text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {activeSkillCategory === "software" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Card className="p-8 glass border-primary/10">
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-xl font-semibold mb-6 text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full"></span>
                        Languages
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[
                          { name: "GoLang", icon: SiGo, color: "#00ADD8" },
                          { name: "C++", icon: SiCplusplus, color: "#00599C" },
                          { name: "C", icon: SiC, color: "#A8B9CC" },
                          { name: "Python", icon: SiPython, color: "#3776AB" },
                          {
                            name: "JavaScript",
                            icon: SiJavascript,
                            color: "#F7DF1E",
                          },
                          {
                            name: "TypeScript",
                            icon: SiTypescript,
                            color: "#3178C6",
                          },
                        ].map((skill) => (
                          <div
                            key={skill.name}
                            className="flex flex-col items-center gap-3 p-4 rounded-lg hover-elevate transition-all duration-200 bg-muted/30 hover:bg-primary/10 border border-transparent hover:border-primary/20"
                            data-testid={`skill-lang-${skill.name.toLowerCase()}`}
                          >
                            <skill.icon
                              className="w-8 h-8"
                              style={{ color: skill.color }}
                            />
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-6 text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full"></span>
                        Frameworks & Libraries
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[
                          { name: "React", icon: SiReact, color: "#61DAFB" },
                          {
                            name: "Node.js",
                            icon: SiNodedotjs,
                            color: "#339933",
                          },
                          {
                            name: "Next.js",
                            icon: SiNextdotjs,
                            color: "#000000",
                          },
                          { name: "Django", icon: SiDjango, color: "#092E20" },
                          { name: "Express", icon: SiExpress, color: "#000000" },
                          {
                            name: "Tailwind",
                            icon: SiTailwindcss,
                            color: "#06B6D4",
                          },
                        ].map((skill) => (
                          <div
                            key={skill.name}
                            className="flex flex-col items-center gap-3 p-4 rounded-lg hover-elevate transition-all duration-200 bg-muted/30 hover:bg-primary/10 border border-transparent hover:border-primary/20"
                            data-testid={`skill-framework-${skill.name
                              .toLowerCase()
                              .replace(/\./g, "-")}`}
                          >
                            <skill.icon
                              className="w-8 h-8"
                              style={{ color: skill.color }}
                            />
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-6 text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full"></span>
                        Databases & APIs
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[
                          {
                            name: "PostgreSQL",
                            icon: SiPostgresql,
                            color: "#4169E1",
                          },
                          { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                          { name: "Redis", icon: SiRedis, color: "#DC382D" },
                          { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
                          { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
                        ].map((skill) => (
                          <div
                            key={skill.name}
                            className="flex flex-col items-center gap-3 p-4 rounded-lg hover-elevate transition-all duration-200 bg-muted/30 hover:bg-primary/10 border border-transparent hover:border-primary/20"
                            data-testid={`skill-db-${skill.name.toLowerCase()}`}
                          >
                            <skill.icon
                              className="w-8 h-8"
                              style={{ color: skill.color }}
                            />
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {activeSkillCategory === "ai" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Card className="p-8 glass border-primary/10">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {[
                      { name: "OpenAI", icon: SiOpenai, color: "#412991" },
                      { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
                      {
                        name: "Vector Databases",
                        icon: FaVectorSquare,
                        color: "#1C3C3C",
                      },
                      {
                        name: "Model Context Protocol",
                        icon: AiOutlineApi,
                        color: "#412991",
                      },
                      {
                        name: "AI Agents",
                        icon: TbRobot,
                        color: "#412991",
                      },
                    ].map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center gap-3 p-4 rounded-lg hover-elevate transition-all duration-200 bg-muted/30 hover:bg-primary/10 border border-transparent hover:border-primary/20"
                        data-testid={`skill-ai-${skill.name.toLowerCase()}`}
                      >
                        <skill.icon
                          className="w-10 h-10"
                          style={{ color: skill.color }}
                        />
                        <span className="text-sm font-medium text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                    <p className="text-center text-muted-foreground">
                      Currently exploring{" "}
                      <strong className="text-foreground">
                        RAG architectures
                      </strong>
                      , <strong className="text-foreground">AI agents</strong>,
                      and{" "}
                      <strong className="text-foreground">LLM fine-tuning</strong>{" "}
                      for production applications
                    </p>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      <section
        ref={leadershipAnim.ref}
        className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30 transition-all duration-1000 ${leadershipAnim.isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              data-testid="text-leadership-title"
            >
              Leadership & Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Driving technical excellence and mentoring the next generation of
              developers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8" data-testid="card-achievements">
              <h3 className="text-2xl font-semibold mb-6">Achievements</h3>
              <ul className="space-y-4 text-base leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>
                    Earned selection to the{" "}
                    <strong className="text-foreground">SSB</strong>,
                    demonstrating exceptional analytical capabilities and
                    decision-making proficiency
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>
                    Achieved{" "}
                    <strong className="text-foreground">900+ commits</strong> in
                    under a year, reflecting consistent dedication to software
                    development excellence
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-8" data-testid="card-education">
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">
                  Indian Institute of Information Technology Bhagalpur
                </h4>
                <p className="text-muted-foreground">
                  Bachelor of Technology in Computer Science Engineering
                </p>
                <p className="text-sm text-muted-foreground">
                  November 2022 – July 2026
                </p>
                <p className="text-sm">
                  CGPA: <strong className="text-foreground">7.16</strong>
                </p>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card
              className="p-8 relative overflow-hidden"
              data-testid="card-role-cp-lead"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              <div className="space-y-4 pl-4">
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-primary border-4 border-background" />
                  <h3 className="text-xl font-semibold">CP/DSA Lead</h3>
                  <p className="text-muted-foreground">
                    GFG IIIT-BH Student's Chapter
                  </p>
                  <p className="text-sm text-muted-foreground">
                    April 2024 – April 2025
                  </p>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>
                      Directed mentorship program for{" "}
                      <strong className="text-foreground">100+ students</strong>{" "}
                      with focused coding exercises and challenges
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>
                      Curated{" "}
                      <strong className="text-foreground">
                        20+ coding problems
                      </strong>{" "}
                      and editorials, increasing engagement by{" "}
                      <strong className="text-foreground">20%</strong> and
                      reducing queries by{" "}
                      <strong className="text-foreground">25%</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card
              className="p-8 relative overflow-hidden"
              data-testid="card-role-club-lead"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              <div className="space-y-4 pl-4">
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-primary border-4 border-background" />
                  <h3 className="text-xl font-semibold">Club Lead</h3>
                  <p className="text-muted-foreground">DevC IIIT Bhagalpur</p>
                  <p className="text-sm text-muted-foreground">
                    January 2024 – January 2025
                  </p>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>
                      Pioneered college community platform development,
                      integrating CI and CD pipelines that reduced deployment
                      times by <strong className="text-foreground">40%</strong>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>
                      Organized{" "}
                      <strong className="text-foreground">
                        8 tech workshops
                      </strong>{" "}
                      on modern tools with{" "}
                      <strong className="text-foreground">
                        300+ cumulative participants
                      </strong>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>
                      Modernized college systems by introducing test automation,
                      decreasing bug reports by{" "}
                      <strong className="text-foreground">35%</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="contact"
        ref={contactAnim.ref}
        className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${contactAnim.isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
          }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            data-testid="text-contact-title"
          >
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:ashwin.2201098cs@iiitbh.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-email"
            >
              <Button size="lg" className="gap-2">
                <Mail className="w-5 h-5" />
                Email Me
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/ashwin-rai-22473a257"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-linkedin"
            >
              <Button size="lg" variant="outline" className="gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
            </a>
            <a
              href="https://github.com/ashwinrai"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-github"
            >
              <Button size="lg" variant="outline" className="gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </Button>
            </a>
            <a href="tel:+91 9636834457" data-testid="link-phone">
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="w-5 h-5" />
                Call Me
              </Button>
            </a>
          </div>

          <div className="mt-16 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              © 2025 Ashwin Rai. Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
