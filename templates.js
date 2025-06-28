// 模板国际化
export const templateTranslations = {
  'zh-CN': {
    'ui': {
      'tech-count': '{count} 技术栈',
      'more-techs': '更多 {count} 项'
    },
    'web-frontend': {
      name: 'Web前端',
      description: '适用于React、Vue、Angular等前端项目',
    },
    'web-backend': {
      name: 'Web后端',
      description: '适用于Node.js、Python、Java等后端项目',
    },
    'fullstack-js': {
      name: '全栈JavaScript',
      description: '使用JavaScript/TypeScript的全栈应用',
    },
    'mobile-app': {
      name: '移动应用',
      description: '适用于iOS、Android原生或跨平台开发',
    },
    'desktop-app': {
      name: '桌面应用',
      description: '适用于Electron、Qt等桌面应用开发',
    },
    'data-science': {
      name: '数据科学',
      description: '适用于Python数据科学、机器学习项目',
    },
    'game-dev': {
      name: '游戏开发',
      description: '适用于Unity、Unreal Engine等游戏开发',
    },
    'wordpress': {
      name: 'WordPress',
      description: '适用于WordPress主题和插件开发',
    },
    'static-site': {
      name: '静态网站',
      description: '适用于Hugo、Jekyll等静态站点生成器',
    },
    'chrome-extension': {
      name: 'Chrome扩展',
      description: '适用于Chrome浏览器扩展开发',
    }
  },
  'en': {
    'ui': {
      'tech-count': '{count} Tech stacks',
      'more-techs': '{count} more'
    },
    'web-frontend': {
      name: 'Web Frontend',
      description: 'For React, Vue, Angular and other frontend projects',
    },
    'web-backend': {
      name: 'Web Backend',
      description: 'For Node.js, Python, Java and other backend projects',
    },
    'fullstack-js': {
      name: 'Full-Stack JavaScript',
      description: 'Full-stack applications using JavaScript/TypeScript',
    },
    'mobile-app': {
      name: 'Mobile App',
      description: 'For iOS, Android native or cross-platform development',
    },
    'desktop-app': {
      name: 'Desktop App',
      description: 'For Electron, Qt and other desktop app development',
    },
    'data-science': {
      name: 'Data Science',
      description: 'For Python data science and machine learning projects',
    },
    'game-dev': {
      name: 'Game Development',
      description: 'For Unity, Unreal Engine and other game development',
    },
    'wordpress': {
      name: 'WordPress',
      description: 'For WordPress themes and plugins development',
    },
    'static-site': {
      name: 'Static Site',
      description: 'For Hugo, Jekyll and other static site generators',
    },
    'chrome-extension': {
      name: 'Chrome Extension',
      description: 'For Chrome browser extension development',
    }
  }
};

// 预设模板配置
export const projectTemplates = {
  'web-frontend': {
    stack: ['javascript', 'typescript', 'react', 'vue', 'webpack', 'vite'],
    recommended: ['vscode', 'nodejs']
  },
  'web-backend': {
    stack: ['python', 'nodejs', 'java', 'django', 'flask', 'express', 'spring'],
    recommended: ['vscode', 'intellij', 'postgresql', 'redis']
  },
  'fullstack-js': {
    stack: ['javascript', 'typescript', 'react', 'nodejs', 'express', 'mongodb'],
    recommended: ['vscode', 'redis']
  },
  'mobile-app': {
    stack: ['android', 'ios', 'reactnative', 'flutter', 'kotlin', 'swift'],
    recommended: ['androidstudio', 'xcode']
  },
  'desktop-app': {
    stack: ['javascript', 'typescript', 'python', 'cpp'],
    recommended: ['vscode', 'intellij']
  },
  'data-science': {
    stack: ['python', 'jupyter'],
    recommended: ['vscode', 'intellij']
  },
  'game-dev': {
    stack: ['cpp', 'csharp', 'python'],
    recommended: ['vscode', 'visualstudio']
  },
  'wordpress': {
    stack: ['php', 'mysql'],
    recommended: ['vscode']
  },
  'static-site': {
    stack: ['javascript', 'ruby'],
    recommended: ['vscode']
  },
  'chrome-extension': {
    stack: ['javascript', 'typescript'],
    recommended: ['vscode']
  }
}; 