// 言語データ
const translations = {
	en: {
		nav: {
			features: 'Features',
			about: 'About',
			future: 'Future Updates'
		},
		hero: {
			subtitle: 'Kanban-style reminder app that syncs with iOS, iPadOS, and macOS reminders',
			download: 'Download on the App Store',
			news: 'Release of Kanbanize for iOS, iPadOS, and macOS'
		},
		about: {
			title: 'About',
			content1: 'Kanbanize is a Kanban-style reminder app that automatically syncs with iOS and iPadOS standard reminders. It features a board-style layout for intuitive progress management, allowing you to manage task states easily with drag & drop.',
			content2: 'The name "Kanbanize" comes from incorporating the Kanban-style UI. "Kanban" refers to a task visualization and progress management system used in Japanese manufacturing.',
			content3: 'The name also embodies our desire to incorporate the flexibility of "sticky note Kanban" into the system. The current UI is designed as "the first form," and we plan to provide more flexible and customizable UI in the future to accommodate individual work styles and task management needs.'
		},
		features: {
			title: 'Main Features',
			sync: {
				title: 'Auto Sync',
				desc: 'Seamlessly syncs with iOS/iPadOS/macOS standard reminders. Uses EventKit to keep your tasks always up to date.'
			},
			layout: {
				title: 'Kanban Layout',
				desc: 'Manage tasks in three stages: "TODO," "In Progress," and "Done." Achieve efficient task management with intuitive operations.'
			},
			dragdrop: {
				title: 'Drag & Drop',
				desc: 'Easily change task progress with drag & drop. Achieve stress-free management with smooth operability.'
			},
			suggestions: {
				title: 'Title Suggestions',
				desc: 'Displays existing task titles as suggestions when creating tasks. Can be toggled on/off in settings.'
			},
			priority: {
				title: 'Priority Setting',
				desc: 'Set task priorities and sort by priority. Never miss important tasks.'
			},
			cleanup: {
				title: 'Bulk Delete Completed',
				desc: 'Delete completed tasks with one tap. Keep your task list clean with simple operations.'
			}
		},
		future: {
			title: 'Future Updates',
			workflow: {
				title: 'Workflow Integration',
				desc: 'Like GitHub Actions and GitHub Projects integration, we will recreate the ability to link tasks with executable workflows in the reminder app.'
			},
			ai: {
				title: 'AI Agent Automation',
				desc: 'Developing automation features using AI agents for automatic task sorting and progress updates.'
			}
		},
		footer: {
			support: {
				title: 'Support',
				page: 'Support Page',
				bug: 'Report Bug',
				feature: 'Feature Request'
			},
			legal: {
				title: 'Legal',
				terms: 'Terms of Service',
				privacy: 'Privacy Policy'
			},
			links: {
				title: 'Links',
				features: 'Features',
				future: 'Future Updates',
				download: 'Download on TestFlight'
			}
		}
	},
	ja: {
		nav: {
			features: '機能',
			about: 'アプリについて',
			future: '機能追加予定'
		},
		hero: {
			subtitle: 'iOS・iPadOS・macOS標準のリマインダーと自動同期する\nカンバン型リマインダーアプリ',
			download: 'App Storeからダウンロード',
			news: 'iOS・iPadOS・macOS向けタスク管理アプリ「Kanbanize」リリースのお知らせ'
		},
		about: {
			title: 'アプリについて',
			content1: 'Kanbanizeは、iOS・iPadOS標準のリマインダーと自動同期するカンバン型リマインダーアプリです。タスクの進捗管理を直感的に行える看板型レイアウトを採用し、ドラッグ＆ドロップで簡単にタスクの状態を管理できます。',
			content2: '「Kanbanize」という名前には、カンバン形式のUIを取り入れていることが由来しています。「Kanban」は、日本の製造業で使用されるタスクの可視化と進捗管理のシステムを指します。',
			content3: 'オフィスでよく見かける付箋を使った手書きのカンバンボード。あの自由な使い心地をデジタルでも実現したい。そんな思いからKanbanizeは生まれました。今後は、付箋の色分けや配置の自由度、グループ化など、より柔軟な機能を追加していく予定です。あなたの理想的なタスク管理スタイルを見つけてください。'
		},
		features: {
			title: '主な特徴',
			sync: {
				title: '自動同期',
				desc: 'iOS/iPadOS/macOS標準リマインダーとシームレスに同期。EventKitを使用して、あなたのタスクを常に最新の状態に保ちます。'
			},
			layout: {
				title: 'カンバン型レイアウト',
				desc: 'タスクを「TODO」「進行中」「完了」の3段階で管理。直感的な操作で、効率的なタスク管理を実現します。'
			},
			dragdrop: {
				title: 'ドラッグ＆ドロップ',
				desc: 'タスクの進行状況をドラッグ＆ドロップで簡単に変更。スムーズな操作性で、ストレスフリーな管理を実現。'
			},
			suggestions: {
				title: 'タイトル候補機能',
				desc: 'タスク作成時のタイトル入力欄に、既存タスクのタイトルを候補として表示。設定画面でオン/オフの切り替えが可能です。'
			},
			priority: {
				title: '優先度設定',
				desc: 'タスクに優先度を設定し、優先度順にソート可能。重要なタスクを見逃すことなく管理できます。'
			},
			cleanup: {
				title: '完了タスクの一括削除',
				desc: '完了済みタスクをワンタップで一括削除。シンプルな操作で、タスクリストをクリーンに保てます。'
			}
		},
		future: {
			title: '今後の機能追加予定',
			workflow: {
				title: 'ワークフローの統合',
				desc: 'GitHub ActionsとGitHub Projectsの連携のように、タスクを実行可能なワークフローと結びつける機能をリマインダーアプリでも再現します。'
			},
			ai: {
				title: 'AIエージェントによる自動化',
				desc: 'タスクの自動振り分けや進捗更新など、AIエージェントを活用した作業自動化機能を開発中です。'
			}
		},
		footer: {
			support: {
				title: 'サポート',
				page: 'サポートページ',
				bug: 'バグ報告',
				feature: '機能リクエスト'
			},
			legal: {
				title: '法的情報',
				terms: '利用規約',
				privacy: 'プライバシーポリシー'
			},
			links: {
				title: 'リンク',
				features: '機能紹介',
				future: '機能追加予定',
				download: 'TestFlightでダウンロード'
			}
		}
	}
};

// 現在の言語を取得（デフォルトは英語）
let currentLang = 'en';

// ブラウザの言語設定を確認
const browserLang = navigator.language.split('-')[0];
if (translations[browserLang]) {
	currentLang = browserLang;
}

// テキストを更新する関数
function updateTexts() {
	const t = translations[currentLang];
	
	// ナビゲーション
	document.querySelector('a[href="#features"]').textContent = t.nav.features;
	document.querySelector('a[href="#about"]').textContent = t.nav.about;
	document.querySelector('a[href="#future"]').textContent = t.nav.future;
	
	// ヒーローセクション
	document.querySelector('.hero p').innerHTML = t.hero.subtitle;
	document.querySelector('.cta-button').textContent = t.hero.download;
	
	// ニュースセクションの表示/非表示
	const newsSection = document.querySelector('.news-section');
	if (newsSection) {
		if (currentLang === 'ja') {
			newsSection.style.display = 'block';
			document.querySelector('.news-item span:last-child').textContent = t.hero.news;
		} else {
			newsSection.style.display = 'none';
		}
	}
	
	// アプリについて
	document.querySelector('#about .section-title').innerHTML = `<i class="fas fa-info-circle"></i> ${t.about.title}`;
	const aboutContent = document.querySelector('.about-content');
	aboutContent.innerHTML = `
		<p>${t.about.content1}</p>
		<p>${t.about.content2}</p>
		<p>${t.about.content3}</p>
	`;
	
	// 機能
	document.querySelector('#features .section-title').innerHTML = `<i class="fas fa-star"></i> ${t.features.title}`;
	const featureCards = document.querySelectorAll('#features .feature-card');
	const features = [t.features.sync, t.features.layout, t.features.dragdrop, t.features.suggestions, t.features.priority, t.features.cleanup];
	featureCards.forEach((card, index) => {
		if (features[index]) {
			card.querySelector('h3').textContent = features[index].title;
			card.querySelector('p').textContent = features[index].desc;
		}
	});
	
	// 今後の機能
	document.querySelector('#future .section-title').textContent = t.future.title;
	const futureCards = document.querySelectorAll('#future .feature-card');
	futureCards[0].querySelector('h3').textContent = t.future.workflow.title;
	futureCards[0].querySelector('p').textContent = t.future.workflow.desc;
	futureCards[1].querySelector('h3').textContent = t.future.ai.title;
	futureCards[1].querySelector('p').textContent = t.future.ai.desc;
	
	// フッター
	const footerSections = document.querySelectorAll('.footer-section');
	// サポート
	footerSections[0].querySelector('h3').textContent = t.footer.support.title;
	footerSections[0].querySelectorAll('a')[0].innerHTML = `<i class="fas fa-life-ring"></i>${t.footer.support.page}`;
	footerSections[0].querySelectorAll('a')[1].innerHTML = `<i class="fas fa-bug"></i>${t.footer.support.bug}`;
	footerSections[0].querySelectorAll('a')[2].innerHTML = `<i class="fas fa-lightbulb"></i>${t.footer.support.feature}`;
	// 法的情報
	footerSections[1].querySelector('h3').textContent = t.footer.legal.title;
	footerSections[1].querySelectorAll('a')[0].innerHTML = `<i class="fas fa-file-contract"></i>${t.footer.legal.terms}`;
	footerSections[1].querySelectorAll('a')[1].innerHTML = `<i class="fas fa-shield-alt"></i>${t.footer.legal.privacy}`;
	// リンク
	footerSections[2].querySelector('h3').textContent = t.footer.links.title;
	footerSections[2].querySelectorAll('a')[0].innerHTML = `<i class="fas fa-star"></i>${t.footer.links.features}`;
	footerSections[2].querySelectorAll('a')[1].innerHTML = `<i class="fas fa-rocket"></i>${t.footer.links.future}`;
	footerSections[2].querySelectorAll('a')[2].innerHTML = `<i class="fas fa-download"></i>${t.footer.links.download}`;
}

// ページ読み込み時にテキストを更新
document.addEventListener('DOMContentLoaded', updateTexts);

// Intersection Observer for animations
const sections = document.querySelectorAll('.section');
const aboutContent = document.querySelector('.about-content');
const aboutImage = document.querySelector('.about-image');

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
		}
	});
}, {
	threshold: 0.1
});

sections.forEach(section => observer.observe(section));
observer.observe(aboutContent);
observer.observe(aboutImage);

// 付箋アニメーション
function startStickyNotesAnimation(containerId) {
	const container = document.getElementById(containerId);
	const maxParticles = 25;
	const interval = 800;
	
	// 初期パーティクルを生成（画面中央から）
	const centerX = window.innerWidth / 2;
	const centerY = window.innerHeight / 2;
	
	for (let i = 0; i < 10; i++) {
		const note = createStickyNote(container, true, centerX, centerY);
		const progress = Math.random() * 100;
		note.style.animationDelay = `-${progress}%`;
	}
	
	let lastTime = 0;
	
	function animate(currentTime) {
		if (!lastTime) lastTime = currentTime;
		const deltaTime = currentTime - lastTime;
		
		if (deltaTime > interval && container.children.length < maxParticles) {
			createStickyNote(container, false);
			lastTime = currentTime;
		}
		
		requestAnimationFrame(animate);
	}
	
	requestAnimationFrame(animate);
}

function createStickyNote(container, isInitial, centerX, centerY) {
	const note = document.createElement('div');
	note.className = 'sticky-note';
	
	const colors = [
		'rgba(0, 222, 255, 0.3)',   // 青
		'rgba(255, 102, 153, 0.3)',  // ピンク
		'rgba(255, 217, 51, 0.3)',   // 黄色
		'rgba(153, 204, 255, 0.3)',  // 薄青
		'rgba(128, 230, 128, 0.3)'   // 緑
	];
	note.style.setProperty('--particle-color', colors[Math.floor(Math.random() * colors.length)]);
	
	let startX, startY;
	if (isInitial) {
		// 初期パーティクルは画面中央から
		startX = centerX + (Math.random() - 0.5) * 200; // 中央から±100px
		startY = centerY + (Math.random() - 0.5) * 200;
	} else {
		// 通常のパーティクルは下から
		startX = Math.random() * window.innerWidth;
		startY = window.innerHeight + 50;
	}
	
	const endX = Math.random() * window.innerWidth;
	const endY = -50;
	
	note.style.setProperty('--startX', startX);
	note.style.setProperty('--startY', startY);
	note.style.setProperty('--endX', endX);
	note.style.setProperty('--endY', endY);
	
	const clipValue = 45 + Math.random() * 10;
	note.style.setProperty('--clip1', `${clipValue}% 0`);
	note.style.setProperty('--clip2', `100% ${clipValue}%`);
	note.style.setProperty('--clip3', `${clipValue}% 100%`);
	note.style.setProperty('--clip4', `0 ${clipValue}%`);
	
	const size = 40 + Math.random() * 40;
	note.style.width = `${size}px`;
	note.style.height = `${size}px`;
	
	note.style.animationDuration = `${8 + Math.random() * 7}s`;
	
	container.appendChild(note);
	
	note.addEventListener('mousemove', (e) => {
		const rect = note.getBoundingClientRect();
		const x = (e.clientX - rect.left - rect.width / 2) / rect.width * 20;
		const y = (e.clientY - rect.top - rect.height / 2) / rect.height * 20;
		note.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale(1.2)`;
	}, { passive: true });
	
	note.addEventListener('mouseleave', () => {
		note.style.transform = '';
	}, { passive: true });
	
	note.addEventListener('click', () => {
		note.remove();
	}, { passive: true });
	
	note.addEventListener('animationend', () => {
		note.remove();
	}, { passive: true });

	return note;
}

// アニメーションを開始
startStickyNotesAnimation('heroNotes');
startStickyNotesAnimation('featuresNotes');
