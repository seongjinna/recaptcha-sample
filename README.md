# recaptcha-sample

이 프로젝트는 Next.js와 Google reCAPTCHA를 통합하여 봇을 방지하는 간단한 예제입니다.

## 설치 및 설정

### 1. 프로젝트 클론

먼저, 이 저장소를 클론합니다.

```bash
git clone https://github.com/seongjinna/recaptcha-sample.git
cd recaptcha-sample
```

### 2. 의존성 설치

프로젝트 의존성을 설치합니다.

```bash
npm install
```

### 3. 환경 변수 설정

Google reCAPTCHA 사이트 키를 사용하여 환경 변수를 설정합니다. 프로젝트 루트에 `.env.local` 파일을 생성하고, 다음과 같이 사이트 키를 설정합니다.

```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
```

> `your-recaptcha-site-key`를 실제 Google reCAPTCHA 사이트 키로 교체하세요.

## 사용 방법

### 1. 개발 서버 실행

다음 명령어를 사용하여 개발 서버를 실행합니다.

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 링크를 열어 애플리케이션을 확인합니다.

### 2. reCAPTCHA 확인

홈 페이지에서 reCAPTCHA 위젯이 로드되고, 이를 완료한 후 폼을 제출할 수 있습니다.

## 코드 설명

`app/page.tsx` 파일은 reCAPTCHA를 통합한 주요 컴포넌트를 포함합니다.

```tsx
"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Home: React.FC = () => {
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA.");
      return;
    }
    // Submit form or perform action
    console.log("Form submitted with reCAPTCHA value:", recaptchaValue);
  };

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

  return (
    <div className="flex flex-col gap-2 items-center justify-center p-4">
      <h1 className="font-bold text-2xl">Next.js with Google reCAPTCHA</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <ReCAPTCHA
          sitekey={recaptchaSiteKey}
          onChange={handleRecaptchaChange}
        />
        <button type="submit" className="bg-black text-white rounded-md p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
```

### 주요 포인트

- `ReCAPTCHA` 컴포넌트는 `react-google-recaptcha` 라이브러리에서 가져왔습니다.
- `handleRecaptchaChange` 함수는 reCAPTCHA의 값이 변경될 때 호출됩니다.
- `handleSubmit` 함수는 폼 제출 시 호출되며, reCAPTCHA 값이 없으면 경고를 표시합니다.

## 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Google reCAPTCHA 공식 문서](https://developers.google.com/recaptcha)
