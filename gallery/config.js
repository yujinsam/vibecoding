// 작품 갤러리 설정
// 1) 자신의 Supabase 프로젝트를 만든 뒤 Project URL과 publishable key를 입력합니다.
// 2) 아래 값이 비어 있으면 데모 모드로 실행되며 제출·피드백은 저장되지 않습니다.
// 3) publishable(anon) 키만 사용하세요. service_role/secret 키를 여기에 넣으면 안 됩니다.
window.APP_CONFIG = {
  SUPABASE_URL: "",
  SUPABASE_KEY: "",

  TABLE_APPS: "classroom_apps",
  TABLE_FEEDBACK: "classroom_feedback",
  RPC_INCREMENT_LIKES: "classroom_increment_likes"
};
