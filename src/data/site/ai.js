// src/data/site/ai.js — #ai 「AI를 쓰는 방식」
// 근거: REDESIGN_BRIEF.md §6.4, PROFILE.md §4 (6)

const ai = {
  title: "AI는 하네스를 먼저 짜고 씁니다",
  items: [
    {
      title: "규칙을 먼저 고정합니다",
      body: "CLAUDE.md와 CONTRIBUTING.md에 팀 규칙을 적었습니다. 브랜치 이름, 커밋 메시지, MR 절차입니다. 6인이 같은 형태의 결과를 얻도록 한 장치입니다. 팀원들은 이 문서를 바탕으로 각자 에이전트 지침을 만들었습니다.",
      links: [
        { label: "CLAUDE.md", href: "https://github.com/team-yorr/yorr/blob/main/CLAUDE.md" },
        { label: "CONTRIBUTING.md", href: "https://github.com/team-yorr/yorr/blob/main/CONTRIBUTING.md" },
      ],
    },
    {
      title: "반복 작업을 자동화합니다",
      body: "MCP로 Jira·Notion을 연동했습니다. 티켓 발급, 스프린트 운영, 요구사항 문서화를 처리합니다. 커밋 메시지와 MR 작성도 규칙대로 자동화했습니다.",
      links: [],
    },
    {
      title: "결과는 직접 검증합니다",
      body: "생성 결과는 커밋 단위로 확인한 뒤 반영합니다. TripCrew에서는 AI가 만든 회원 조회를 EXPLAIN으로 열어 26배 개선했습니다. 챗봇 답변은 관광지 DB와 대조해 검증된 장소만 보여 줍니다.",
      links: [],
    },
  ],
  closing: "AI가 만든 코드는 빠릅니다. 왜 맞는지는 사람이 증명해야 합니다.",
};

export { ai };
