// Language translations object
const translations = {
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.services': '服务',
    'nav.projects': '项目',
    'nav.contact': '联系',
    'lang.zh': '中文',
    'lang.en': 'English',

    // Hero sections
    'hero.title': '天津磐石国际会展有限公司',
    'hero.subtitle': '磐石根基，坚韧踏实，未来有我！',
    'about.title': '关于我们',
    'services.title': '服务',
    'projects.title': '案例展示',
    'contact.title': '联系我们',

    // Projects page
    'projects.gallery.item1.title': '国际展览展台',
    'projects.gallery.item1.desc': '大型国际展会展台设计与搭建',
    'projects.gallery.item2.title': '商务会议活动',
    'projects.gallery.item2.desc': '高端商务会议策划与执行',
    'projects.gallery.item3.title': '产品发布会',
    'projects.gallery.item3.desc': '创新产品发布会现场布置',
    'projects.gallery.item4.title': '展览展示',
    'projects.gallery.item4.desc': '专业展览展示空间设计',
    'projects.gallery.item5.title': '会议活动',
    'projects.gallery.item5.desc': '大型会议活动策划与管理',

    // Contact page
    'contact.info.title': '联系方式',
    'contact.info.company': '公司名称：',
    'contact.info.company.zh': '天津磐石国际会展有限公司',
    'contact.info.company.en':
      'Tianjin ROCK International Exhibition Co., Ltd.',
    'contact.info.person': '联系人：',
    'contact.info.person.name': '王一舒',
    'contact.info.phone': '电话：',
    'contact.info.phone.number': '15503507389',
    'contact.info.email': '邮箱：',
    'contact.info.email.address': '57361340@qq.com',
    'contact.address.title': '公司地址',
    'contact.address.content':
      '公司位于中国大直辖市之一天津市，紧邻北京，是北方最重要的港口城市及重要的工业基地。公司地理位置就位于商务部和局的第三个国家会展项目 - 天津国际会展中心附近。',
    'contact.form.title': '发送消息',
    'contact.form.name': '姓名',
    'contact.form.email': '邮箱',
    'contact.form.phone': '电话',
    'contact.form.message': '消息内容',
    'contact.form.submit': '发送消息',

    // About page
    'about.overview.title': '公司概况',
    'about.purpose.title': '成立初衷',
    'about.purpose.content':
      '天津磐石国际会展有限公司成立初衷是基于更好的满足国际会展行业时代发展的需求。',
    'about.background.title': '成立背景',
    'about.background.content':
      '随着会展行业的快速发展，公司应运而生，拥有近二十年行业经验的团队致力于为客户提供专业的服务。',
    'about.location.title': '公司位置',
    'about.location.content':
      '公司位于中国大直辖市之一天津市，紧邻北京，是北方最重要的港口城市及重要的工业基地。公司地理位置就位于商务部和局的第三个国家会展项目 - 天津国际会展中心附近。',
    'about.scale.title': '公司规模',
    'about.scale.content':
      '我们不仅拥有现代化及经验丰富的服务团队，还背靠各大供应商的强力支持与配合。可承接各类大型展台设计和展览会议活动，以及与展会相关的商务活动。',
    'about.vision.title': '愿景',
    'about.vision.content': '成为国际会展行业具有价值的参与者与传播者。',
    'about.mission.title': '使命',
    'about.mission.content':
      '为客户提供踏实的会展服务，推动行业发展，创造社会价值。',

    // Services page
    'services.core.title': '核心业务',
    'services.exhibition.title': '会议展台搭建',
    'services.exhibition.design': '展台设计',
    'services.exhibition.design.desc':
      '根据客户需求，提供个性化的展台设计方案，确保展台与品牌形象高度统一。',
    'services.exhibition.materials': '材料选择',
    'services.exhibition.materials.desc':
      '选用优质材料，确保展台结构稳固、外观美观，同时符合安全标准。',
    'services.exhibition.construction': '搭建施工',
    'services.exhibition.construction.desc':
      '拥有专业的施工团队，确保展台搭建进度快、质量高，为客户提供满意的交付成果。',
    'services.international.title': '国际展览会议',
    'services.international.planning': '会展策划与执行',
    'services.international.planning.desc':
      '提供全方位的会展策划与执行服务，包括主题设定、场地选择、展位设计、活动安排等服务。',
    'services.international.agency': '国际展览代理',
    'services.international.agency.desc':
      '作为国际展览的代理，协助企业参与国际展览，提供展位预定、展台搭建、现场协调等服务。',
    'services.international.visits': '会展及研讨会参观',
    'services.international.visits.desc':
      '组织并协助企业定期参观专业的贸易会展以及行业专题研讨会，满足企业发展中不同时期的需求。',
    'services.business.title': '商务会议及活动',
    'services.business.planning': '会议策划与执行',
    'services.business.planning.desc':
      '提供全方位的会议策划服务，包括场地选择、议程安排、设备租赁等，确保会议顺利进行。',
    'services.business.management': '活动策划与管理',
    'services.business.management.desc':
      '针对各类活动提供策划与管理服务，包括庆典活动、展览展示、产品发布会等，满足客户需求。',
    'services.business.travel': '商务旅行及保险服务',
    'services.business.travel.desc':
      '提供商务旅行一站式服务，包括机票预订、酒店安排、交通接送、人员或货物相关的境外保险服务等。',

    // Features section
    'features.title': '服务特点',
    'features.professional.title': '专业化服务团队',
    'features.professional.item1': '专业背景',
    'features.professional.item2': '服务流程',
    'features.professional.item3': '稳妥踏实',
    'features.experience.title': '丰富的行业经验',
    'features.experience.item1': '服务领域广泛',
    'features.experience.item2': '规避潜在风险',
    'features.experience.item3': '定制化服务',
    'features.innovation.title': '创新的设计理念',
    'features.innovation.item1': '创新',
    'features.innovation.item2': '绿色环保',
    'features.innovation.item3': '智能化管理',

    // Footer
    'footer.company': '天津磐石国际会展有限公司',
    'footer.company.en': 'Tianjin ROCK International Exhibition Co., Ltd.',
    'footer.contact': '联系方式',
    'footer.contact.person': '联系人: 王一舒',
    'footer.contact.phone': '电话: 15503507389',
    'footer.contact.email': '邮箱: 57361340@qq.com',
    'footer.quicklinks': '快速链接',
    'footer.home': '首页',
    'footer.about': '关于我们',
    'footer.services': '服务',
    'footer.contact': '联系',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'lang.zh': '中文',
    'lang.en': 'English',

    // Hero sections
    'hero.title': 'Tianjin ROCK International Exhibition Co., Ltd.',
    'hero.subtitle': 'Solid Foundation, Steady Progress, Future Together!',
    'about.title': 'About Us',
    'services.title': 'Services',
    'projects.title': 'Projects',
    'contact.title': 'Contact Us',

    // Projects page
    'projects.gallery.item1.title': 'International Exhibition Stands',
    'projects.gallery.item1.desc':
      'Design and construction of large international exhibition stands',
    'projects.gallery.item2.title': 'Business Conferences',
    'projects.gallery.item2.desc':
      'Planning and execution of high-end business conferences',
    'projects.gallery.item3.title': 'Product Launches',
    'projects.gallery.item3.desc': 'Innovative product launch event setup',
    'projects.gallery.item4.title': 'Exhibition Displays',
    'projects.gallery.item4.desc': 'Professional exhibition space design',
    'projects.gallery.item5.title': 'Conference Events',
    'projects.gallery.item5.desc':
      'Planning and management of large conference events',

    // Contact page
    'contact.info.title': 'Contact Information',
    'contact.info.company': 'Company Name:',
    'contact.info.company.zh': '天津磐石国际会展有限公司',
    'contact.info.company.en':
      'Tianjin ROCK International Exhibition Co., Ltd.',
    'contact.info.person': 'Contact Person:',
    'contact.info.person.name': 'Wang Yishu',
    'contact.info.phone': 'Phone:',
    'contact.info.phone.number': '+86 155 0350 7389',
    'contact.info.email': 'Email:',
    'contact.info.email.address': '57361340@qq.com',
    'contact.address.title': 'Company Address',
    'contact.address.content':
      "Located in Tianjin, one of China's major municipalities adjacent to Beijing, it is the most important port city and industrial base in northern China. Our company is situated near the third national exhibition project of the Ministry of Commerce - Tianjin International Exhibition Center.",
    'contact.form.title': 'Send Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',

    // About page
    'about.overview.title': 'Company Overview',
    'about.purpose.title': 'Establishment Purpose',
    'about.purpose.content':
      'Tianjin ROCK International Exhibition Co., Ltd. was established to better meet the development needs of the international exhibition industry.',
    'about.background.title': 'Background',
    'about.background.content':
      'With the rapid development of the exhibition industry, our company emerged with a team possessing nearly 20 years of industry experience.',
    'about.location.title': 'Location',
    'about.location.content':
      "Located in Tianjin, one of China's major municipalities adjacent to Beijing, it is the most important port city and industrial base in northern China. Our company is situated near the third national exhibition project of the Ministry of Commerce - Tianjin International Exhibition Center.",
    'about.scale.title': 'Company Scale',
    'about.scale.content':
      'We have a modern and experienced service team, backed by strong support from major suppliers. We can undertake various large-scale exhibition stand designs, exhibition events, and related business activities.',
    'about.vision.title': 'Vision',
    'about.vision.content':
      'To become a valuable participant and promoter in the international exhibition industry.',
    'about.mission.title': 'Mission',
    'about.mission.content':
      'To provide reliable exhibition services, promote industry development, and create social value.',

    // Services page
    'services.core.title': 'Core Business',
    'services.exhibition.title': 'Exhibition Stand Construction',
    'services.exhibition.design': 'Stand Design',
    'services.exhibition.design.desc':
      'Provide personalized stand design solutions based on client needs, ensuring high consistency with brand image.',
    'services.exhibition.materials': 'Material Selection',
    'services.exhibition.materials.desc':
      'Use high-quality materials to ensure structural stability, aesthetic appearance, and safety standards compliance.',
    'services.exhibition.construction': 'Construction',
    'services.exhibition.construction.desc':
      'Professional construction team ensures fast progress and high quality, delivering satisfactory results to clients.',
    'services.international.title': 'International Exhibitions',
    'services.international.planning': 'Exhibition Planning',
    'services.international.planning.desc':
      'Provide comprehensive exhibition planning and execution services, including theme setting, venue selection, booth design, and event scheduling.',
    'services.international.agency': 'International Exhibition Agency',
    'services.international.agency.desc':
      'Act as an international exhibition agent, assisting companies in participating in international exhibitions, providing booth reservation, construction, and on-site coordination.',
    'services.international.visits': 'Exhibition & Seminar Visits',
    'services.international.visits.desc':
      'Organize and assist companies in regularly visiting professional trade shows and industry seminars to meet different development needs.',
    'services.business.title': 'Business Meetings & Events',
    'services.business.planning': 'Meeting Planning',
    'services.business.planning.desc':
      'Provide comprehensive meeting planning services, including venue selection, agenda arrangement, and equipment rental.',
    'services.business.management': 'Event Management',
    'services.business.management.desc':
      'Provide planning and management services for various events, including ceremonies, exhibitions, and product launches.',
    'services.business.travel': 'Business Travel & Insurance',
    'services.business.travel.desc':
      'Provide one-stop business travel services, including flight booking, hotel arrangements, transportation, and overseas insurance for personnel or goods.',

    // Features section
    'features.title': 'Service Features',
    'features.professional.title': 'Professional Service Team',
    'features.professional.item1': 'Professional Background',
    'features.professional.item2': 'Service Process',
    'features.professional.item3': 'Reliable & Steady',
    'features.experience.title': 'Rich Industry Experience',
    'features.experience.item1': 'Wide Service Scope',
    'features.experience.item2': 'Risk Prevention',
    'features.experience.item3': 'Customized Service',
    'features.innovation.title': 'Innovative Design Concepts',
    'features.innovation.item1': 'Innovation',
    'features.innovation.item2': 'Eco-friendly',
    'features.innovation.item3': 'Smart Management',

    // Footer
    'footer.company': 'Tianjin ROCK International Exhibition Co., Ltd.',
    'footer.company.en': 'Tianjin ROCK International Exhibition Co., Ltd.',
    'footer.contact': 'Contact',
    'footer.contact.person': 'Contact: Wang Yishu',
    'footer.contact.phone': 'Tel: +86 155 0350 7389',
    'footer.contact.email': 'Email: 57361340@qq.com',
    'footer.quicklinks': 'Quick Links',
    'footer.home': 'Home',
    'footer.about': 'About',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
  },
}

// Function to switch language
function switchLanguage(lang) {
  // Save language preference
  localStorage.setItem('preferredLanguage', lang)

  // Update HTML lang attribute
  document.documentElement.lang = lang

  // Update all elements with data-lang-key
  document.querySelectorAll('[data-lang-key]').forEach(element => {
    const key = element.getAttribute('data-lang-key')
    if (translations[lang] && translations[lang][key]) {
      // Handle input placeholders separately
      if (
        element.tagName.toLowerCase() === 'input' &&
        element.hasAttribute('placeholder')
      ) {
        element.placeholder = translations[lang][key]
      } else {
        element.textContent = translations[lang][key]
      }
    }
  })
}

// Function to apply saved language preference
function applySavedLanguage() {
  const savedLang = localStorage.getItem('preferredLanguage')
  if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
    switchLanguage(savedLang)
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved language preference
  applySavedLanguage()

  // Initialize Bootstrap components
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  )
  if (tooltipTriggerList.length > 0) {
    tooltipTriggerList.forEach(
      tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)
    )
  }

  const carouselElement = document.querySelector('#mainCarousel')
  if (carouselElement) {
    new bootstrap.Carousel(carouselElement, {
      interval: 5000,
      touch: true,
    })
  }
})
