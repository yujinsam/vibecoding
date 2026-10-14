# 작품 갤러리: 개인 Supabase 프로젝트 연결

이 갤러리는 정적 HTML·CSS·JavaScript로 동작합니다. 제출한 앱 주소와 피드백을 여러 기기에서 함께 보려면 **본인이 소유한 별도의 Supabase 프로젝트**를 연결해야 합니다. 현재 설정은 빈 값이므로 데모 모드로 실행되며, 이 상태에서 작성한 내용은 저장되지 않습니다.

## 1. Supabase 프로젝트 만들기

1. [Supabase](https://supabase.com/)에 가입하거나 로그인합니다.
2. 새 프로젝트를 만듭니다. 가능하면 수업자료용으로 별도 프로젝트를 사용합니다.
3. 프로젝트가 준비되면 대시보드의 **SQL Editor**를 엽니다.
4. 이 저장소의 `gallery/schema.sql` 파일 내용을 전부 복사해 새 SQL 쿼리에 붙여넣고 **Run**을 실행합니다.
5. 실행 성공 후 Table Editor에 `classroom_apps`와 `classroom_feedback` 테이블이 생성되었는지 확인합니다.

SQL은 공개 읽기·제출만 허용하고, 일반 사용자의 직접 수정·삭제는 차단하도록 RLS 정책을 설정합니다. 좋아요 수 증가는 별도 함수로 처리합니다.

## 2. 갤러리 설정하기

Supabase 프로젝트 설정에서 다음 두 값을 확인합니다.

- **Project URL**
- **Publishable key** (또는 프로젝트에서 제공하는 공개용 anon 키)

GitHub 저장소에서 `gallery/config.js`를 열고 다음 값을 본인 프로젝트 값으로 입력한 뒤 커밋합니다.

```js
window.APP_CONFIG = {
  SUPABASE_URL: "본인 프로젝트의 Project URL",
  SUPABASE_KEY: "본인 프로젝트의 publishable key",
  TABLE_APPS: "classroom_apps",
  TABLE_FEEDBACK: "classroom_feedback",
  RPC_INCREMENT_LIKES: "classroom_increment_likes"
};
```

**service_role 또는 secret 키는 절대 입력하지 마세요.** 이 파일은 웹 브라우저로 전송되므로 공개되어도 되는 키만 사용해야 합니다. 실제 데이터 보호는 Supabase의 RLS 정책이 담당합니다.

## 3. 동작 확인

1. GitHub Pages에서 `gallery/` 경로를 엽니다.
2. 실제 DB 연결이 성공하면 데모 안내가 사라지고 Supabase에 저장된 결과물이 표시됩니다.
3. 테스트용 결과물을 하나 제출한 다음 페이지를 새로고침합니다. 새로고침 후에도 결과물이 남아 있다면 저장이 정상 동작하는 것입니다.
4. 테스트가 끝나면 테스트 결과물을 Supabase Table Editor에서 정리할 수 있습니다.

## 4. 공개·개인정보 안내

- 닉네임, 결과물 소개, 앱 주소, 피드백은 공개 웹페이지를 통해 다른 이용자에게 보입니다.
- 실명, 학교 이메일, 전화번호, 개인 계정 정보 등은 입력하지 않도록 안내하세요.
- publishable key는 프런트엔드에서 사용하도록 설계된 공개 키입니다. secret/service_role 키와 혼동하지 마세요.
- 누구나 제출할 수 있는 공개 갤러리이므로 부적절한 제출을 주기적으로 확인하는 것이 좋습니다.

## 파일 구성

| 파일 | 역할 |
|---|---|
| `index.html` | 결과물 보기와 제출 화면 |
| `style.css` | 갤러리 디자인 |
| `app.js` | 목록·제출·좋아요·피드백 동작 |
| `config.js` | 본인 Supabase 프로젝트 연결 설정 |
| `schema.sql` | 테이블, 접근 정책, 좋아요 함수 |
| `SETUP.md` | 이 안내서 |
