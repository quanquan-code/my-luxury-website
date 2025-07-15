import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, MapPin, Globe, Menu, X, Download, ArrowRight, Star, Quote } from 'lucide-react';

// 定义类型
type Language = 'en' | 'zh';

interface NavTranslation {
  home: string;
  about: string;
  services: string;
  insights: string;
  portfolio: string;
  contact: string;
}

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

interface PostItem {
  title: string;
  excerpt: string;
  category: string;
}

interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  highlight: string;
}

interface TestimonialItem {
  quote: string;
  author: string;
  company: string;
}

interface StatItem {
  number: string;
  label: string;
}

interface ContactInfo {
  icon: any;
  label: string;
  value: string;
}

interface Translation {
  nav: NavTranslation;
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    role: string;
    description: string;
    cta: string;
    trustBadge: string;
  };
  services: {
    title: string;
    subtitle: string;
    description: string;
    items: ServiceItem[];
    workingStyle: string;
  };
  insights: {
    title: string;
    subtitle: string;
    description: string;
    posts: PostItem[];
    freeDownload: {
      title: string;
      description: string;
      cta: string;
    };
  };
  portfolio: {
    title: string;
    subtitle: string;
    featured: ProjectItem[];
  };
  testimonials: {
    title: string;
    items: TestimonialItem[];
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    achievements: StatItem[];
    expertise: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    form: {
      name: string;
      email: string;
      project: string;
      send: string;
    };
    info: ContactInfo[];
  };
}

const PersonalWebsite: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const translations: Record<Language, Translation> = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        insights: 'Insights',
        portfolio: 'Portfolio',
        contact: 'Contact'
      },
      hero: {
        tagline: 'For Compelling Content and Cross-Cultural Brand Stories',
        title: 'Fangyuan Cen',
        subtitle: 'The Luxury Transcreator',
        role: 'English & Simplified Chinese',
        description: 'Trusted by luxury leaders of some of the world\'s most recognised premium brands. From brilliant cut diamonds to dream destinations and designer collections, I craft narratives that speak to the emotions behind life\'s most coveted experiences.',
        cta: 'Discover My Work',
        trustBadge: 'Trusted by Fortune 500 brands and innovative startups across luxury, lifestyle, and hospitality sectors.'
      },
      services: {
        title: 'Services',
        subtitle: 'Grow your brand with a transcreator who gets your industry',
        description: 'Whether you\'re heading up the marketing team of a Fortune 500 company or you\'re a passionate entrepreneur with an aspirational start-up, I can devise an elegant and culturally resonant narrative that directly speaks to your Chinese audience.',
        items: [
          {
            title: 'Social Media Transcreation',
            description: 'Captivating content for Xiaohongshu, Weibo, and WeChat that resonates with Chinese luxury consumers',
            icon: '📱'
          },
          {
            title: 'Website Localization',
            description: 'SEO-optimized content that maintains your brand\'s essence while speaking fluent Chinese culture',
            icon: '🌐'
          },
          {
            title: 'Marketing Collateral',
            description: 'Brochures, product descriptions, and campaigns that seduce your market by speaking to all five senses',
            icon: '📄'
          }
        ],
        workingStyle: 'Working on a per-project basis, I\'m just as happy to write an email sequence or set of product descriptions, as I am creating a comprehensive tone of voice strategy or overhauling an entire website.'
      },
      insights: {
        title: 'Insights',
        subtitle: 'What can we learn from luxury transcreation?',
        description: 'Unlock the secrets of cross-cultural luxury marketing',
        posts: [
          {
            title: 'The Art of Luxury Transcreation',
            excerpt: 'Why direct translation fails luxury brands and how transcreation captures the soul of premium experiences.',
            category: 'Strategy'
          },
          {
            title: 'Decoding Chinese Luxury Consumers',
            excerpt: 'Understanding the emotional triggers that drive purchasing decisions in the world\'s largest luxury market.',
            category: 'Consumer Insights'
          },
          {
            title: 'From Dior to Digital',
            excerpt: 'How heritage luxury brands successfully navigate China\'s dynamic digital landscape.',
            category: 'Case Study'
          }
        ],
        freeDownload: {
          title: 'Free Download',
          description: 'Staring at a blank page? Unlock an eclectic list of 100 eloquent Chinese expressions to inspire your luxury brand communications.',
          cta: 'Download Free Guide'
        }
      },
      portfolio: {
        title: 'Portfolio',
        subtitle: 'See how I\'ve captured (and kept!) the attention of customers like yours',
        featured: [
          {
            title: 'Châteaux & Stories',
            subtitle: 'Château Lafite-Rothschild',
            description: 'A legendary vineyard with centuries of heritage and a story that transcends time.',
            category: 'Estate Transcreation',
            highlight: 'Heritage storytelling that honors tradition while speaking to modern Chinese consumers'
          },
          {
            title: 'Timeless Elegance',
            subtitle: 'DIOR Campaigns',
            description: 'Fashion content that captures the essence of French luxury for the Chinese market.',
            category: 'Fashion Transcreation',
            highlight: 'Cultural adaptation that maintains brand prestige while ensuring local relevance'
          },
          {
            title: 'Hospitality Refined',
            subtitle: 'Cheval Collection',
            description: 'Award-winning luxury hospitality with thirteen exclusive locations across London, Edinburgh and Dubai.',
            category: 'Hospitality Marketing',
            highlight: 'Social media content that transforms properties into aspirational experiences'
          }
        ]
      },
      testimonials: {
        title: 'What Clients Say',
        items: [
          {
            quote: 'Fangyuan doesn\'t just translate - she transforms our brand voice into something that truly resonates with Chinese luxury consumers.',
            author: 'Marketing Director',
            company: 'Luxury Hospitality Group'
          },
          {
            quote: 'Her understanding of both cultures allows her to capture nuances that direct translation simply cannot achieve.',
            author: 'Brand Manager',
            company: 'European Fashion House'
          }
        ]
      },
      about: {
        title: 'About',
        subtitle: 'Getting to the heart of your brand, so you can attract the high-end Chinese clientele your business deserves',
        description: 'With over 5 years of specialized experience in luxury transcreation, I bridge the cultural gap between your brand and Chinese consumers. My approach goes beyond translation - I craft content that maintains your brand\'s sophistication while speaking fluent Chinese culture.',
        achievements: [
          { number: '50K+', label: 'Blog Readers' },
          { number: '150K+', label: 'Social Followers' },
          { number: '100+', label: 'Luxury Projects' }
        ],
        expertise: [
          'Cultural nuance adaptation',
          'Luxury market psychology',
          'Premium brand positioning',
          'Cross-platform content strategy'
        ]
      },
      contact: {
        title: 'Let\'s Create Something Extraordinary',
        subtitle: 'Ready to captivate Chinese luxury consumers?',
        description: 'Whether you need a single campaign or a comprehensive content strategy, let\'s discuss how we can elevate your brand\'s presence in the Chinese market.',
        form: {
          name: 'Name',
          email: 'Email',
          project: 'Tell me about your project',
          send: 'Start the Conversation'
        },
        info: [
          { icon: Mail, label: 'Email', value: 'helenecen@foxmail.com' },
          { icon: MessageCircle, label: 'WeChat', value: 'cfyXrux' },
          { icon: MapPin, label: 'Location', value: 'Hangzhou, China' }
        ]
      }
    },
    zh: {
      nav: {
        home: '首页',
        about: '关于我',
        services: '服务',
        insights: '洞察',
        portfolio: '作品集',
        contact: '联系我'
      },
      hero: {
        tagline: '为引人入胜的内容和跨文化品牌故事而生',
        title: 'Fangyuan Cen',
        subtitle: '奢侈品创译专家',
        role: '英文&简体中文',
        description: '深受全球知名奢侈品牌信赖。从璀璨钻石到梦想目的地，从设计师臻品到奢华体验，我为生活中最令人向往的瞬间打造触动人心的叙述。',
        cta: '探索我的作品',
        trustBadge: '深受财富500强品牌和创新初创企业信赖，专精奢侈品、生活方式和酒店业领域。'
      },
      services: {
        title: '服务项目',
        subtitle: '与深谙行业的创译专家一起发展您的品牌',
        description: '无论您是财富500强企业的营销团队负责人，还是怀有远大抱负的创业者，我都能为您的品牌量身定制优雅且具有文化共鸣的叙述，直接触达中国消费者的内心。',
        items: [
          {
            title: '社交媒体创译',
            description: '为小红书、微博和微信打造与中国奢侈品消费者产生共鸣的引人入胜内容',
            icon: '📱'
          },
          {
            title: '网站本地化',
            description: 'SEO优化内容，在保持品牌精髓的同时流畅表达中国文化',
            icon: '🌐'
          },
          {
            title: '营销物料',
            description: '宣传册、产品描述和营销活动，通过调动五感来吸引您的目标市场',
            icon: '📄'
          }
        ],
        workingStyle: '基于项目合作，无论是撰写邮件序列、产品描述，还是制定完整的品牌语调策略或网站改版，我都能胜任。'
      },
      insights: {
        title: '行业洞察',
        subtitle: '我们能从奢侈品创译中学到什么？',
        description: '解锁跨文化奢侈品营销的秘密',
        posts: [
          {
            title: '奢侈品创译的艺术',
            excerpt: '为什么直译会让奢侈品牌失败，而创译如何捕捉高端体验的灵魂。',
            category: '策略思考'
          },
          {
            title: '解码中国奢侈品消费者',
            excerpt: '理解驱动全球最大奢侈品市场购买决策的情感触发点。',
            category: '消费者洞察'
          },
          {
            title: '从迪奥到数字化',
            excerpt: '传统奢侈品牌如何成功驾驭中国动态数字化环境。',
            category: '案例研究'
          }
        ],
        freeDownload: {
          title: '免费下载',
          description: '面对空白页面不知所措？下载100个优雅中文表达的精选清单，为您的奢侈品牌传播注入灵感。',
          cta: '下载免费指南'
        }
      },
      portfolio: {
        title: '作品集',
        subtitle: '看看我如何吸引并留住您的目标客户',
        featured: [
          {
            title: '酒庄传奇',
            subtitle: '拉菲罗斯柴尔德酒庄',
            description: '一个拥有数百年传承的传奇酒庄，讲述着超越时光的故事。',
            category: '地产创译',
            highlight: '传承故事叙述，既尊重传统又触达现代中国消费者'
          },
          {
            title: '永恒优雅',
            subtitle: '迪奥品牌推广',
            description: '为中国市场捕捉法式奢华精髓的时尚内容。',
            category: '时尚创译',
            highlight: '文化适应，在保持品牌威望的同时确保本地相关性'
          },
          {
            title: '精致酒店业',
            subtitle: '仕骅廷酒店集团',
            description: '屡获殊荣的奢华酒店集团，在伦敦、爱丁堡和迪拜拥有十三处独家地点。',
            category: '酒店营销',
            highlight: '将酒店物业转化为向往体验的社交媒体内容'
          }
        ]
      },
      testimonials: {
        title: '客户评价',
        items: [
          {
            quote: '岑方圆不仅仅是翻译 - 她将我们的品牌声音转化为真正与中国奢侈品消费者产生共鸣的内容。',
            author: '市场总监',
            company: '奢华酒店集团'
          },
          {
            quote: '她对两种文化的深度理解让她能够捕捉到直译根本无法达到的细致入微之处。',
            author: '品牌经理',
            company: '欧洲时装品牌'
          }
        ]
      },
      about: {
        title: '关于我',
        subtitle: '深入品牌核心，助您吸引值得拥有的高端中国客户',
        description: '拥有超过5年奢侈品创译专业经验，我在您的品牌与中国消费者之间架起文化桥梁。我的方法超越翻译——我创造的内容既保持品牌的精致感，又流畅表达中国文化。',
        achievements: [
          { number: '5万+', label: '博客读者' },
          { number: '15万+', label: '社媒粉丝' },
          { number: '100+', label: '奢侈品项目' }
        ],
        expertise: [
          '文化细节适应',
          '奢侈品市场心理学',
          '高端品牌定位',
          '跨平台内容策略'
        ]
      },
      contact: {
        title: '让我们共创非凡',
        subtitle: '准备好吸引中国奢侈品消费者了吗？',
        description: '无论您需要单一营销活动还是全面内容策略，让我们讨论如何提升您品牌在中国市场的影响力。',
        form: {
          name: '姓名',
          email: '邮箱',
          project: '告诉我您的项目需求',
          send: '开始对话'
        },
        info: [
          { icon: Mail, label: '邮箱', value: 'helenecen@foxmail.com' },
          { icon: MessageCircle, label: '微信', value: 'cfyXrux' },
          { icon: MapPin, label: '位置', value: '杭州，中国' }
        ]
      }
    }
  };

  const t = translations[language];

  const brands = [
    'Dior', 'Hermès', 'Hilton', 'Cheval', 'Universal', 'Moncler', 
    'Nike', 'Samsung', 'Mercedes-Benz', 'Hyatt', 'Bulgari', 'MAC'
  ];

  const scrollToSection = (sectionId: string): void => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const sections = ['home', 'about', 'services', 'insights', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">
                {language === 'en' ? 'Fangyuan Cen' : '岑方圆'}
              </span>
              <span className="ml-2 text-sm text-gray-500">
                {language === 'en' ? 'The Luxury Transcreator' : '奢侈品创译专家'}
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === key 
                      ? 'text-amber-600' 
                      : 'text-gray-700 hover:text-amber-600'
                  }`}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                className="flex items-center space-x-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{language === 'en' ? '中' : 'EN'}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                className="flex items-center space-x-1 px-2 py-1 rounded-full bg-gray-100"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{language === 'en' ? '中' : 'EN'}</span>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-2">
              {Object.entries(t.nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === key 
                      ? 'text-amber-600 bg-amber-50' 
                      : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-amber-600 font-medium mb-4 tracking-wide">
              {t.hero.tagline}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              {t.hero.title}
            </h1>
            <h2 className="text-2xl md:text-3xl text-amber-600 mb-2 font-light">
              {t.hero.subtitle}
            </h2>
            <h3 className="text-lg md:text-xl text-gray-600 mb-8">
              {t.hero.role}
            </h3>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              {t.hero.description}
            </p>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="bg-amber-600 text-white px-10 py-4 rounded-full hover:bg-amber-700 transition-all duration-200 text-lg font-medium inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>{t.hero.cta}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="mt-16 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg max-w-2xl mx-auto">
              <p className="text-gray-600 text-sm italic">
                {t.hero.trustBadge}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-amber-600 mb-6">
              {t.services.subtitle}
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.services.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {t.services.items.map((service: ServiceItem, index: number) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 italic leading-relaxed">
              {t.services.workingStyle}
            </p>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.insights.title}
            </h2>
            <p className="text-xl text-amber-600 mb-6">
              {t.insights.subtitle}
            </p>
            <p className="text-lg text-gray-600">
              {t.insights.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {t.insights.posts.map((post: PostItem, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200">
                <span className="text-sm text-amber-600 font-medium px-3 py-1 bg-amber-100 rounded-full">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            ))}
          </div>

          {/* Free Download */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">{t.insights.freeDownload.title}</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              {t.insights.freeDownload.description}
            </p>
            <button className="bg-white text-amber-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 font-medium inline-flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>{t.insights.freeDownload.cta}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.portfolio.title}
            </h2>
            <p className="text-xl text-amber-600">
              {t.portfolio.subtitle}
            </p>
          </div>

          <div className="space-y-12">
            {t.portfolio.featured.map((project: ProjectItem, index: number) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏆</div>
                      <p className="text-amber-600 font-medium">{project.category}</p>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-amber-600 font-medium text-sm px-3 py-1 bg-amber-100 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
                    {project.title}
                  </h3>
                  <h4 className="text-xl text-amber-600 mb-4">
                    {project.subtitle}
                  </h4>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                    <p className="text-amber-800 italic">
                      "{project.highlight}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.testimonials.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.testimonials.items.map((testimonial: TestimonialItem, index: number) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8">
                <Quote className="w-8 h-8 text-amber-400 mb-4" />
                <p className="text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.about.title}
            </h2>
            <p className="text-xl text-amber-600 mb-6 max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t.about.description}
              </p>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                {language === 'en' ? 'Core Expertise' : '核心专长'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {t.about.expertise.map((skill: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-amber-600 fill-current" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {t.about.achievements.map((stat: StatItem, index: number) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
                    <div className="text-2xl md:text-3xl font-bold text-amber-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === 'en' ? 'Trusted by' : '合作品牌'}
                </h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {brands.slice(0, 6).map((brand: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-amber-400 mb-6">
              {t.contact.subtitle}
            </p>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">
                {language === 'en' ? 'Contact Information' : '联系信息'}
              </h3>
              <div className="space-y-6">
                {t.contact.info.map((item: ContactInfo, index: number) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-amber-600 p-3 rounded-lg">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-gray-300 text-sm">{item.label}</span>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="space-y-6">
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    {t.contact.form.name}
                  </div>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none"
                    placeholder={t.contact.form.name}
                  />
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    {t.contact.form.email}
                  </div>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none"
                    placeholder={t.contact.form.email}
                  />
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    {t.contact.form.project}
                  </div>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none"
                    placeholder={t.contact.form.project}
                  ></textarea>
                </div>
                <button
                  onClick={() => {
                    alert(language === 'en' ? 'Thank you for your interest! I\'ll be in touch soon.' : '感谢您的关注！我会尽快联系您。');
                  }}
                  className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-200 font-medium inline-flex items-center justify-center space-x-2"
                >
                  <span>{t.contact.form.send}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 {language === 'en' ? 'Fangyuan Cen - The Luxury Transcreator' : '岑方圆 - 奢侈品创译专家'}. {language === 'en' ? 'All rights reserved.' : '版权所有。'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;