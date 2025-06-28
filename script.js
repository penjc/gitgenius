// ===== GitIgnore 生成器 - 主要功能 =====

// 国际化翻译对象
const translations = {
  'zh-CN': {
    'app.title': 'GitGenius',
    'sidebar.title': '选择技术栈',
    'sidebar.search': '搜索技术...',
    'sidebar.selected': '已选择',
    'sidebar.clear': '清空',
    'categories.languages': '编程语言',
    'categories.frontend': '前端框架',
    'categories.backend': '后端框架',
    'categories.mobile': '移动开发',
    'categories.database': '数据库',
    'categories.os': '操作系统',
    'categories.ide': 'IDE/编辑器',
    'toolbar.import': '导入',
    'toolbar.template': '模板',
    'toolbar.history': '历史',
    'toolbar.preview': '预览',
    'editor.placeholder': '# 选择技术栈生成 .gitignore 文件，或者直接在这里编辑...',
    'actions.clear': '清空',
    'actions.copy': '复制',
    'actions.download': '下载',
    'actions.share': '分享',
    'modal.import.title': '导入 .gitignore 文件',
    'modal.import.description': '拖拽文件到这里或点击选择文件',
    'modal.template.title': '项目模板',
    'modal.history.title': '历史记录',
    'modal.preview.title': '预览',
    'modal.share.title': '分享配置',
    'modal.share.url': '分享链接:',
    'toast.copied': '已复制到剪贴板',
    'toast.downloaded': '文件下载成功',
    'toast.error': '操作失败，请重试',
    'editor.lines': '{count} 行',
    'history.apply': '应用',
    'history.delete': '删除',
    'history.empty': '暂无历史记录',
    'history.custom': '自定义内容'
  },
  'en': {
    'app.title': 'GitGenius',
    'sidebar.title': 'Select Tech Stack',
    'sidebar.search': 'Search technologies...',
    'sidebar.selected': 'Selected',
    'sidebar.clear': 'Clear',
    'categories.languages': 'Languages',
    'categories.frontend': 'Frontend',
    'categories.backend': 'Backend',
    'categories.mobile': 'Mobile',
    'categories.database': 'Database',
    'categories.os': 'Operating Systems',
    'categories.ide': 'IDE/Editors',
    'toolbar.import': 'Import',
    'toolbar.template': 'Templates',
    'toolbar.history': 'History',
    'toolbar.preview': 'Preview',
    'editor.placeholder': '# Select tech stack to generate .gitignore file, or edit directly here...',
    'actions.clear': 'Clear',
    'actions.copy': 'Copy',
    'actions.download': 'Download',
    'actions.share': 'Share',
    'modal.import.title': 'Import .gitignore File',
    'modal.import.description': 'Drag files here or click to select',
    'modal.template.title': 'Project Templates',
    'modal.history.title': 'History',
    'modal.preview.title': 'Preview',
    'modal.share.title': 'Share Configuration',
    'modal.share.url': 'Share URL:',
    'toast.copied': 'Copied to clipboard',
    'toast.downloaded': 'File downloaded successfully',
    'toast.error': 'Operation failed, please try again',
    'editor.lines': '{count} lines',
    'history.apply': 'Apply',
    'history.delete': 'Delete',
    'history.empty': 'No history records',
    'history.custom': 'Custom content'
  }
};

// 技术栈数据
const techStackData = {
  languages: [
    { id: 'javascript', name: 'JavaScript', icon: 'fab fa-js' },
    { id: 'python', name: 'Python', icon: 'fab fa-python' },
    { id: 'java', name: 'Java', icon: 'fab fa-java' },
    { id: 'csharp', name: 'C#', icon: 'fab fa-microsoft' },
    { id: 'cpp', name: 'C++', icon: 'fas fa-code' },
    { id: 'go', name: 'Go', icon: 'fab fa-golang' },
    { id: 'rust', name: 'Rust', icon: 'fas fa-code' },
    { id: 'php', name: 'PHP', icon: 'fab fa-php' },
    { id: 'ruby', name: 'Ruby', icon: 'fas fa-gem' },
    { id: 'swift', name: 'Swift', icon: 'fab fa-swift' },
    { id: 'kotlin', name: 'Kotlin', icon: 'fab fa-android' },
    { id: 'typescript', name: 'TypeScript', icon: 'fab fa-js' }
  ],
  frontend: [
    { id: 'react', name: 'React', icon: 'fab fa-react' },
    { id: 'vue', name: 'Vue.js', icon: 'fab fa-vuejs' },
    { id: 'angular', name: 'Angular', icon: 'fab fa-angular' },
    { id: 'svelte', name: 'Svelte', icon: 'fab fa-js' },
    { id: 'nextjs', name: 'Next.js', icon: 'fab fa-react' },
    { id: 'nuxtjs', name: 'Nuxt.js', icon: 'fab fa-vuejs' },
    { id: 'gatsby', name: 'Gatsby', icon: 'fab fa-react' },
    { id: 'webpack', name: 'Webpack', icon: 'fab fa-js' },
    { id: 'vite', name: 'Vite', icon: 'fas fa-bolt' },
    { id: 'parcel', name: 'Parcel', icon: 'fas fa-box' }
  ],
  backend: [
    { id: 'nodejs', name: 'Node.js', icon: 'fab fa-node-js' },
    { id: 'django', name: 'Django', icon: 'fab fa-python' },
    { id: 'flask', name: 'Flask', icon: 'fab fa-python' },
    { id: 'spring', name: 'Spring', icon: 'fab fa-java' },
    { id: 'express', name: 'Express', icon: 'fab fa-node-js' },
    { id: 'fastapi', name: 'FastAPI', icon: 'fab fa-python' },
    { id: 'rails', name: 'Ruby on Rails', icon: 'fas fa-gem' },
    { id: 'laravel', name: 'Laravel', icon: 'fab fa-laravel' },
    { id: 'aspnet', name: 'ASP.NET', icon: 'fab fa-microsoft' }
  ],
  mobile: [
    { id: 'android', name: 'Android', icon: 'fab fa-android' },
    { id: 'ios', name: 'iOS', icon: 'fab fa-apple' },
    { id: 'reactnative', name: 'React Native', icon: 'fab fa-react' },
    { id: 'flutter', name: 'Flutter', icon: 'fab fa-google' },
    { id: 'xamarin', name: 'Xamarin', icon: 'fab fa-microsoft' },
    { id: 'ionic', name: 'Ionic', icon: 'fas fa-mobile-alt' },
    { id: 'cordova', name: 'Cordova', icon: 'fab fa-android' }
  ],
  database: [
    { id: 'mysql', name: 'MySQL', icon: 'fas fa-database' },
    { id: 'postgresql', name: 'PostgreSQL', icon: 'fas fa-database' },
    { id: 'mongodb', name: 'MongoDB', icon: 'fas fa-database' },
    { id: 'redis', name: 'Redis', icon: 'fas fa-database' },
    { id: 'sqlite', name: 'SQLite', icon: 'fas fa-database' },
    { id: 'oracle', name: 'Oracle', icon: 'fas fa-database' },
    { id: 'elasticsearch', name: 'Elasticsearch', icon: 'fas fa-search' }
  ],
  os: [
    { id: 'windows', name: 'Windows', icon: 'fab fa-windows' },
    { id: 'macos', name: 'macOS', icon: 'fab fa-apple' },
    { id: 'linux', name: 'Linux', icon: 'fab fa-linux' }
  ],
  ide: [
    { id: 'vscode', name: 'VS Code', icon: 'fab fa-microsoft' },
    { id: 'intellij', name: 'IntelliJ', icon: 'fas fa-edit' },
    { id: 'eclipse', name: 'Eclipse', icon: 'fas fa-edit' },
    { id: 'xcode', name: 'Xcode', icon: 'fab fa-apple' },
    { id: 'androidstudio', name: 'Android Studio', icon: 'fab fa-android' },
    { id: 'vim', name: 'Vim', icon: 'fas fa-terminal' },
    { id: 'emacs', name: 'Emacs', icon: 'fas fa-terminal' }
  ]
};

// GitIgnore规则模板
import { gitignoreTemplates, commonRules } from './gitignoreTemplates.js';
import { templateTranslations, projectTemplates } from './templates.js';

// 应用类
export class GitIgnoreGenerator {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'en';
    this.currentTheme = 'light';
    this.selectedStack = new Set();
    this.history = JSON.parse(localStorage.getItem('gitignore-history') || '[]');
    this.favorites = JSON.parse(localStorage.getItem('gitignore-favorites') || '[]');
    
    this.init();
  }

  init() {
    this.loadTheme();
    this.bindEvents();
    this.renderTechStack();
    this.updateUI();
    this.updateLineNumbers();
  }

  // 主题管理
  loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.setTheme(savedTheme);
  }

  setTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  // 国际化
  toggleLanguage() {
    const newLang = this.currentLang === 'en' ? 'zh-CN' : 'en';
    this.setLanguage(newLang);
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    this.updateTranslations();
  }

  updateTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.getTranslation(key);
      if (translation) {
        element.textContent = translation;
      }
    });

    // 更新placeholder
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      const translation = this.getTranslation(key);
      if (translation) {
        element.placeholder = translation;
      }
    });

    // 更新行数显示
    this.updateLineNumbers();
  }

  getTranslation(key) {
    return translations[this.currentLang]?.[key] || translations['zh-CN'][key] || key;
  }

  // 事件绑定
  bindEvents() {
    // 主题切换
    document.getElementById('themeToggle')?.addEventListener('click', () => {
      this.toggleTheme();
    });

    // 语言切换
    document.getElementById('langToggle')?.addEventListener('click', () => {
      this.toggleLanguage();
    });
    
    // 分类展开/收起
    this.bindCategoryEvents();
    
    // 搜索功能
    this.bindSearchEvents();
    
    // 编辑器功能
    this.bindEditorEvents();
    
    // 操作按钮
    this.bindActionEvents();
    
    // 模态框
    this.bindModalEvents();
    
    // 清空选择
    document.getElementById('clearAll')?.addEventListener('click', () => {
      this.clearSelection();
    });
  }

  bindCategoryEvents() {
    document.querySelectorAll('.category-header').forEach(header => {
      header.addEventListener('click', () => {
        const category = header.closest('.category');
        category.classList.toggle('expanded');
      });
    });
  }

  bindSearchEvents() {
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');

    searchInput?.addEventListener('input', (e) => {
      this.filterTechStack(e.target.value);
    });

    searchClear?.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
        this.filterTechStack('');
      }
    });
  }

  bindEditorEvents() {
    const editor = document.getElementById('editor');
    editor?.addEventListener('input', () => {
      this.updateLineNumbers();
    });

    editor?.addEventListener('scroll', () => {
      this.syncLineNumbers();
    });
  }

  bindActionEvents() {
    document.getElementById('clearBtn')?.addEventListener('click', () => {
      this.clearEditor();
    });

    document.getElementById('copyBtn')?.addEventListener('click', () => {
      this.copyToClipboard();
    });

    document.getElementById('downloadBtn')?.addEventListener('click', () => {
      this.downloadFile();
    });

    document.getElementById('shareBtn')?.addEventListener('click', () => {
      this.showShareModal();
    });

    document.getElementById('templateBtn')?.addEventListener('click', () => {
      this.showTemplateModal();
    });

    document.getElementById('historyBtn')?.addEventListener('click', () => {
      this.showHistoryModal();
    });

    document.getElementById('previewBtn')?.addEventListener('click', () => {
      this.showPreviewModal();
    });
  }

  bindModalEvents() {
    // 关闭模态框
    document.querySelectorAll('.close-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal');
        this.closeModal(modalId);
      });
    });

    // 点击背景关闭模态框
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('show');
        }
      });
    });
  }

  // 渲染技术栈
  renderTechStack() {
    Object.keys(techStackData).forEach(category => {
      const container = document.getElementById(category);
      if (container) {
        container.innerHTML = '';
        techStackData[category].forEach(item => {
          const element = this.createStackItem(item);
          container.appendChild(element);
        });
      }
    });
  }

  createStackItem(item) {
    const div = document.createElement('div');
    div.className = 'stack-item';
    div.setAttribute('data-id', item.id);
    
    div.innerHTML = `
      <i class="${item.icon}"></i>
      <span>${item.name}</span>
    `;

    div.addEventListener('click', () => {
      this.toggleStackItem(item.id, item.name);
    });

    return div;
  }

  // 技术栈选择
  toggleStackItem(id, name) {
    const item = document.querySelector(`[data-id="${id}"]`);
    
    if (this.selectedStack.has(id)) {
      this.selectedStack.delete(id);
      item?.classList.remove('selected');
    } else {
      this.selectedStack.add(id);
      item?.classList.add('selected');
    }
    
    this.updateSelectedItems();
    this.generateGitignore();
  }

  updateSelectedItems() {
    const container = document.getElementById('selectedItems');
    if (!container) return;

    // 获取当前已有的项
    const existingItems = new Map();
    container.querySelectorAll('.selected-item').forEach(item => {
      const id = item.querySelector('.remove').getAttribute('data-id');
      existingItems.set(id, item);
    });

    // 更新选中项
    this.selectedStack.forEach(id => {
      // 如果项目已存在，保留它
      if (existingItems.has(id)) {
        existingItems.delete(id);
        return;
      }

      // 查找对应的技术栈信息
      let stackItem = null;
      Object.values(techStackData).forEach(category => {
        const found = category.find(item => item.id === id);
        if (found) stackItem = found;
      });

      if (stackItem) {
        const element = document.createElement('div');
        element.className = 'selected-item new';
        element.innerHTML = `
          <span>${stackItem.name}</span>
          <i class="fas fa-times remove" data-id="${id}"></i>
        `;

        const removeBtn = element.querySelector('.remove');
        removeBtn?.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggleStackItem(id, stackItem.name);
        });

        container.appendChild(element);
        
        // 移除new类，这样下次更新时不会再有动画
        setTimeout(() => {
          element.classList.remove('new');
        }, 300);
      }
    });

    // 移除不再选中的项
    existingItems.forEach(item => {
      item.remove();
    });
  }

  clearSelection() {
    this.selectedStack.clear();
    document.querySelectorAll('.stack-item.selected').forEach(item => {
      item.classList.remove('selected');
    });
    this.updateSelectedItems();
    this.generateGitignore();
  }

  // GitIgnore生成
  generateGitignore() {
    let content = '';
    const editor = document.getElementById('editor');
    
    if (this.selectedStack.size === 0) {
      content = '';
    } else {
      // 生成文件头部注释
      content += `# GitIgnore file generated by GitGenius (https://gitgenius.pengjiancheng.com/)\n\n`;
      // content += `# Generated on: ${new Date().toLocaleString()}\n`;
      // content += `# Selected technologies: ${Array.from(this.selectedStack).join(', ')}\n\n`;
      
      // 为每个选中的技术栈添加对应的规则
      this.selectedStack.forEach(stackId => {
        if (gitignoreTemplates[stackId]) {
          content += `# ${stackId}\n`;
          content += gitignoreTemplates[stackId] + '\n\n';
        }
      });

      // 最后添加通用规则
      content += `# Common rules\n${commonRules}`;
    }

    if (editor) {
      editor.value = content;
      this.updateLineNumbers();
    }

    // 保存到历史记录
    this.saveToHistory(content);
  }

  // 搜索过滤
  filterTechStack(query) {
    const searchTerm = query.toLowerCase().trim();
    const categories = document.querySelectorAll('.category');

    // 如果搜索词为空，则恢复默认显示，并且不改变分类的展开状态
    if (!searchTerm) {
      document.querySelectorAll('.stack-item').forEach(item => {
        item.style.display = 'flex';
      });
      return;
    }

    const categoriesToExpand = new Set();

    // 遍历所有技术栈项目，以确定其可见性并记录需要展开的分类
    document.querySelectorAll('.stack-item').forEach(item => {
      const textContent = item.textContent || item.innerText;
      const isVisible = textContent.toLowerCase().includes(searchTerm);
      item.style.display = isVisible ? 'flex' : 'none';

      if (isVisible) {
        const category = item.closest('.category');
        if (category) {
          categoriesToExpand.add(category);
        }
      }
    });

    // 根据搜索结果展开或折叠分类
    categories.forEach(category => {
      if (categoriesToExpand.has(category)) {
        category.classList.add('expanded');
      } else {
        category.classList.remove('expanded');
      }
    });
  }

  // 编辑器功能
  updateLineNumbers() {
    const editor = document.getElementById('editor');
    const lineNumbers = document.getElementById('lineNumbers');
    const lineCount = document.getElementById('lineCount');
    
    if (!editor || !lineNumbers) return;

    const lines = editor.value.split('\n');
    const lineNumbersText = lines.map((_, index) => index + 1).join('\n');
    
    lineNumbers.textContent = lineNumbersText;
    
    if (lineCount) {
      const count = lines.length;
      lineCount.textContent = this.getTranslation('editor.lines').replace('{count}', count);
    }
  }

  syncLineNumbers() {
    const editor = document.getElementById('editor');
    const lineNumbers = document.getElementById('lineNumbers');
    
    if (editor && lineNumbers) {
      lineNumbers.scrollTop = editor.scrollTop;
    }
  }

  clearEditor() {
    const editor = document.getElementById('editor');
    if (editor) {
      editor.value = '';
      this.updateLineNumbers();
    }
  }

  // 复制到剪贴板
  async copyToClipboard() {
    const editor = document.getElementById('editor');
    if (!editor) return;

    try {
      await navigator.clipboard.writeText(editor.value);
      this.showToast('success', this.getTranslation('toast.copied'));
    } catch (err) {
      // 降级方案
      editor.select();
      document.execCommand('copy');
      this.showToast('success', this.getTranslation('toast.copied'));
    }
  }

  // 下载文件
  downloadFile() {
    const editor = document.getElementById('editor');
    if (!editor) return;

    const content = editor.value || '# Empty .gitignore file';
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = '.gitignore';
    a.style.display = 'none';
    document.body.appendChild(a);
    
    try {
      a.click();
      this.showToast('success', this.getTranslation('toast.downloaded'));
    } catch (err) {
      console.error('Download failed:', err);
      this.showToast('error', this.getTranslation('toast.error'));
    } finally {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  }

  // 历史记录管理
  saveToHistory(content) {
    if (!content.trim()) return;

    const historyItem = {
      id: Date.now(),
      content: content,
      selectedStack: Array.from(this.selectedStack),
      timestamp: new Date().toISOString(),
      preview: content.split('\n').slice(0, 3).join('\n') + '...'
    };

    this.history.unshift(historyItem);
    this.history = this.history.slice(0, 50); // 限制历史记录数量
    
    localStorage.setItem('gitignore-history', JSON.stringify(this.history));
  }

  loadFromHistory(item) {
    const editor = document.getElementById('editor');
    if (editor) {
      editor.value = item.content;
      this.updateLineNumbers();
    }

    // 恢复技术栈选择
    this.selectedStack.clear();
    document.querySelectorAll('.stack-item.selected').forEach(el => {
      el.classList.remove('selected');
    });

    item.selectedStack.forEach(id => {
      this.selectedStack.add(id);
      const element = document.querySelector(`[data-id="${id}"]`);
      element?.classList.add('selected');
    });

    this.updateSelectedItems();
  }

  // 模态框管理
  showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show');
    }
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('show');
    }
  }

  showTemplateModal() {
    this.renderTemplates();
    this.showModal('templateModal');
  }

  showHistoryModal() {
    this.renderHistory();
    this.showModal('historyModal');
  }

  showPreviewModal() {
    const editor = document.getElementById('editor');
    const previewContent = document.getElementById('previewContent');
    
    if (editor && previewContent) {
      previewContent.textContent = editor.value || '# Empty .gitignore file';
    }
    
    this.showModal('previewModal');
  }

  showShareModal() {
    const shareUrl = document.getElementById('shareUrl');
    if (shareUrl) {
      const config = {
        selectedStack: Array.from(this.selectedStack),
        content: document.getElementById('editor')?.value || ''
      };
      
      const encodedConfig = btoa(JSON.stringify(config));
      const url = `${window.location.origin}${window.location.pathname}?config=${encodedConfig}`;
      shareUrl.value = url;
    }
    
    this.showModal('shareModal');
    
    // 绑定复制分享链接
    document.getElementById('copyShareBtn')?.addEventListener('click', () => {
      this.copyShareUrl();
    });
  }

  async copyShareUrl() {
    const shareUrl = document.getElementById('shareUrl');
    if (!shareUrl) return;

    try {
      await navigator.clipboard.writeText(shareUrl.value);
      this.showToast('success', this.getTranslation('toast.copied'));
    } catch (err) {
      shareUrl.select();
      document.execCommand('copy');
      this.showToast('success', this.getTranslation('toast.copied'));
    }
  }

  // 模板渲染
  renderTemplates() {
    const templateGrid = document.getElementById('templateGrid');
    if (!templateGrid) return;

    const templates = Object.keys(projectTemplates).map(id => ({
      id,
      ...templateTranslations[this.currentLang][id],
      ...projectTemplates[id]
    }));

    templateGrid.innerHTML = templates.map(template => {
      const techCount = template.stack.length + template.recommended.length;
      const techCountText = templateTranslations[this.currentLang].ui['tech-count'].replace('{count}', techCount);

      return `
        <div class="template-item" data-template="${template.id}">
          <div class="template-header">
            <h4>${template.name}</h4>
            <span class="template-tech-count">${techCountText}</span>
          </div>
          <p class="template-description">${template.description}</p>
          <div class="template-techs">
            ${this.renderTemplateTechs(template)}
          </div>
        </div>
      `;
    }).join('');

    // 绑定模板点击事件
    templateGrid.querySelectorAll('.template-item').forEach(item => {
      item.addEventListener('click', () => {
        const templateId = item.getAttribute('data-template');
        const template = templates.find(t => t.id === templateId);
        if (template) {
          this.applyTemplate(template);
          this.closeModal('templateModal');
        }
      });
    });
  }

  // 渲染模板中的技术栈标签
  renderTemplateTechs(template) {
    const allTechs = [...template.stack, ...template.recommended];
    const maxDisplay = 5; // 最多显示的技术栈数量
    
    const techsToShow = allTechs.slice(0, maxDisplay).map(tech => {
      const techInfo = this.findTechInfo(tech);
      return `<span class="tech-tag"><i class="${techInfo?.icon || 'fas fa-code'}"></i>${techInfo?.name || tech}</span>`;
    }).join('');

    const remaining = allTechs.length - maxDisplay;
    const moreTag = remaining > 0 ? 
      `<span class="tech-tag more">${templateTranslations[this.currentLang].ui['more-techs'].replace('{count}', remaining)}</span>` : '';

    return techsToShow + moreTag;
  }

  // 查找技术栈信息
  findTechInfo(techId) {
    for (const category of Object.values(techStackData)) {
      const tech = category.find(item => item.id === techId);
      if (tech) return tech;
    }
    return null;
  }

  // 应用模板
  applyTemplate(template) {
    // 清空当前选择
    this.clearSelection();
    
    // 应用必选技术栈
    template.stack.forEach(stackId => {
      this.selectedStack.add(stackId);
      const element = document.querySelector(`[data-id="${stackId}"]`);
      element?.classList.add('selected');
    });

    // 应用推荐技术栈
    template.recommended.forEach(stackId => {
      this.selectedStack.add(stackId);
      const element = document.querySelector(`[data-id="${stackId}"]`);
      element?.classList.add('selected');
    });
    
    this.updateSelectedItems();
    this.generateGitignore();

    const templateName = templateTranslations[this.currentLang][template.id].name;
    this.showToast('success', `已应用模板: ${templateName}`);
  }

  // 历史记录渲染
  renderHistory() {
    const historyList = document.getElementById('historyList');
    if (!historyList) return;

    if (this.history.length === 0) {
      historyList.innerHTML = `<p style="text-align: center; color: var(--text-muted);">${this.getTranslation('history.empty')}</p>`;
      return;
    }

    historyList.innerHTML = this.history.map(item => `
      <div class="history-item" data-id="${item.id}">
        <div class="history-info">
          <h5>${new Date(item.timestamp).toLocaleString()}</h5>
          <small>${item.selectedStack.join(', ') || this.getTranslation('history.custom')}</small>
        </div>
        <div class="history-actions">
          <button class="history-btn primary" onclick="app.loadFromHistory(${JSON.stringify(item).replace(/"/g, '&quot;')})">
            ${this.getTranslation('history.apply')}
          </button>
          <button class="history-btn secondary" onclick="app.deleteHistory(${item.id})">
            ${this.getTranslation('history.delete')}
          </button>
        </div>
      </div>
    `).join('');
  }

  deleteHistory(id) {
    this.history = this.history.filter(item => item.id !== id);
    localStorage.setItem('gitignore-history', JSON.stringify(this.history));
    this.renderHistory();
  }

  // 提示消息
  showToast(type, message) {
    const toast = document.getElementById('toast');
    const icon = toast?.querySelector('.toast-icon');
    const messageEl = toast?.querySelector('.toast-message');
    
    if (!toast || !icon || !messageEl) return;

    // 设置图标
    const icons = {
      success: 'fas fa-check-circle',
      error: 'fas fa-exclamation-circle',
      warning: 'fas fa-exclamation-triangle'
    };
    
    icon.className = `toast-icon ${icons[type] || icons.success}`;
    messageEl.textContent = message;
    
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // 更新UI
  updateUI() {
    this.updateTranslations();
    
    // 默认展开第一个分类
    const firstCategory = document.querySelector('.category');
    if (firstCategory) {
      firstCategory.classList.add('expanded');
    }
  }

  // 从URL加载配置
  loadFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const configParam = urlParams.get('config');
    
    if (configParam) {
      try {
        const config = JSON.parse(atob(configParam));
        
        // 恢复技术栈选择
        if (config.selectedStack) {
          this.clearSelection();
          config.selectedStack.forEach(id => {
            this.selectedStack.add(id);
            const element = document.querySelector(`[data-id="${id}"]`);
            element?.classList.add('selected');
          });
          this.updateSelectedItems();
        }
        
        // 恢复编辑器内容
        if (config.content) {
          const editor = document.getElementById('editor');
          if (editor) {
            editor.value = config.content;
            this.updateLineNumbers();
          }
        } else {
          this.generateGitignore();
        }
        
        this.showToast('success', '已从分享链接加载配置');
      } catch (err) {
        console.error('Failed to load config from URL:', err);
        this.showToast('error', '配置加载失败');
      }
    }
  }
}

// 初始化应用
let app = null;

document.addEventListener('DOMContentLoaded', () => {
  try {
    app = new GitIgnoreGenerator();
    
    // Set language from localStorage on init
    const savedLang = localStorage.getItem('language') || 'en';
    app.setLanguage(savedLang);

    // 从URL加载配置（如果有）
    app.loadFromURL();
    
    // 清理URL参数
    if (window.location.search) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    // 导出全局函数供HTML调用
    window.app = app;
  } catch (error) {
    console.error('Application initialization failed:', error);
  }
}); 