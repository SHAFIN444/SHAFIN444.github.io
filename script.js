const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#dialog-content');
const isKorean = document.documentElement.lang === 'ko';
const notes = {
  ssh: `<h2>SSH Brute-Force Detection Tool</h2><p>A learning project in Python, Linux authentication logs, and basic security detection.</p><h3>The question</h3><p>How can repeated failed SSH login attempts help identify potentially suspicious authentication behavior?</p><h3>My contribution</h3><p>I built a Python-based tool with AI coding assistance to analyze Linux authentication logs for potential SSH brute-force activity. The project helped me connect log entries with basic detection concepts.</p><h3>What I learned</h3><ul><li>How failed authentication events can reveal a repeated pattern.</li><li>Why log analysis is a useful foundation for security monitoring.</li><li>How Python can support a small, focused security investigation.</li></ul><h3>Scope &amp; limitations</h3><p>This is a learning project. Repeated failures indicate activity worth investigating; they do not, by themselves, confirm an attack. The terminal on this portfolio is an illustrative example, not a captured result from the tool. See the repository for the implementation.</p><a class="text-link" href="https://github.com/SHAFIN444/ssh-bruteforce-detector" target="_blank" rel="noopener noreferrer">Explore the repository <span>↗</span></a>`,
  linux: `<h2>Linux Practice Lab</h2><p>A four-week self-study plan using Ubuntu in UTM, with command-line practice and basic networking exercises.</p><h3>Practice areas</h3><ul><li><strong>File permissions:</strong> understanding access rights and working with permissions.</li><li><strong>Users:</strong> practicing user management fundamentals.</li><li><strong>Command-line tools:</strong> working with grep, find, and pipes.</li><li><strong>Networking:</strong> building familiarity with basic network scanning using Nmap.</li></ul><h3>Why it matters</h3><p>These exercises are helping me build the systems knowledge I need for deeper work in security operations and log analysis.</p><h3>Environment</h3><p>Ubuntu · UTM · Nmap. The command examples shown on the portfolio are illustrative.</p>`
};
if (isKorean) {
  notes.ssh = `<h2>SSH 무차별 대입 탐지 도구</h2><p>Python으로 Linux 인증 로그를 분석하며 기초 보안 탐지 개념을 익힌 학습 프로젝트입니다.</p><h3>탐구한 질문</h3><p>반복적인 SSH 로그인 실패를 통해 잠재적으로 의심스러운 인증 활동을 어떻게 식별할 수 있을까요?</p><h3>제가 한 일</h3><p>AI 코딩 지원을 활용해 Linux 인증 로그에서 SSH 무차별 대입 의심 활동을 분석하는 Python 도구를 만들었습니다. 로그 항목과 기초 탐지 개념을 연결해 보는 경험이었습니다.</p><h3>배운 점</h3><ul><li>인증 실패 이벤트에서 반복되는 패턴을 찾는 방법</li><li>보안 모니터링의 기초가 되는 로그 분석의 중요성</li><li>작은 범위의 보안 분석에 Python을 활용하는 방법</li></ul><h3>범위 및 한계</h3><p>학습 목적으로 만든 프로젝트입니다. 반복적인 실패는 추가 조사가 필요한 신호일 수 있지만, 그 자체로 공격을 확정하지는 않습니다. 포트폴리오의 터미널 화면은 실제 실행 결과가 아닌 예시입니다. 구현 내용은 저장소에서 확인할 수 있습니다.</p><a class="text-link" href="https://github.com/SHAFIN444/ssh-bruteforce-detector" target="_blank" rel="noopener noreferrer">GitHub 저장소 보기 <span>↗</span></a>`;
  notes.linux = `<h2>Linux 실습 랩</h2><p>UTM에서 Ubuntu를 실행하며 명령줄 사용과 네트워크 기초를 익힌 4주간의 자율 학습 과정입니다.</p><h3>주요 실습 내용</h3><ul><li><strong>파일 권한:</strong> 접근 권한의 의미를 이해하고 권한 설정을 실습했습니다.</li><li><strong>사용자 관리:</strong> 사용자 관리의 기본 기능을 익혔습니다.</li><li><strong>명령줄 도구:</strong> grep, find, 파이프를 활용했습니다.</li><li><strong>네트워크:</strong> Nmap으로 기본적인 네트워크 스캔을 실습했습니다.</li></ul><h3>학습의 의미</h3><p>보안관제와 로그 분석을 더 깊이 공부하기 위해 필요한 시스템 기초 지식을 쌓는 과정입니다.</p><h3>실습 환경</h3><p>Ubuntu · UTM · Nmap. 포트폴리오에 표시된 명령어는 설명을 위한 예시입니다.</p>`;
}
let lastTrigger;
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  lastTrigger = button;
  content.innerHTML = notes[button.dataset.project];
  dialog.showModal();
}));
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => lastTrigger?.focus());
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#copy-email').addEventListener('click', async event => {
  const button = event.currentTarget;
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('shafinrahman158@gmail.com');
    button.textContent = isKorean ? '이메일 복사 완료 ✓' : 'Email copied ✓';
    status.textContent = isKorean ? '이메일 주소가 클립보드에 복사되었습니다.' : 'Email address copied to clipboard.';
    setTimeout(() => { button.innerHTML = (isKorean ? '이메일 복사 ' : 'Copy email ') + '<span>⧉</span>'; }, 2500);
  } catch {
    status.textContent = isKorean ? '위에 표시된 이메일 주소를 직접 복사해 주세요.' : 'Please copy the email address shown above.';
    button.textContent = isKorean ? '위 주소를 직접 복사해 주세요' : 'Copy the address above';
  }
});
