import {
  Button,
  Form,
  FormItem,
  FormProps,
  Input,
} from "@carrot-farm/mongsil-ui";
import Link from "next/link";
import { GoogleLogo } from "../../atoms/Icon";

export interface AuthFormViewProps {
  type: "signup" | "signin";
  onGoogleClick: () => void;
  onEmailSubmit: FormProps["onSubmit"];
}

function AuthFormView({
  type = "signup",
  onGoogleClick,
  onEmailSubmit,
}: AuthFormViewProps) {
  return (
    <div>
      <h1 className="mt-16 mb-16 text-center text-4xl text-gray-600 font-bold">
        {type === "signup" ? "회원가입" : "로그인"}
      </h1>

      <Button className="w-full mb-10" onClick={onGoogleClick}>
        <GoogleLogo className="mr-2 inline" />
        <span className="text-primary">
          {type === "signup" ? "구글 회원가입" : "구글 로그인"}
        </span>
      </Button>

      <div className="flex mb-10">
        <div className="w-2/12 flex items-cneter">
          <div className="border-t mt-3 h-px border-gray-400 w-full" />
        </div>
        <div className="w-8/12 text-sm text-center text-gray-500">
          {type === "signup"
            ? "혹은 이메일 가입을 해주십시요"
            : "혹은 이메일 로그인을 해주십시요"}
        </div>
        <div className="w-2/12 flex items-cneter">
          <div className="border-t mt-3 h-px border-gray-400 w-full" />
        </div>
      </div>

      <Form className="space-y-6" onSubmit={onEmailSubmit}>
        <FormItem name="email" label="이메일" className=" text-gray-400">
          <Input placeholder="이메일을 입력해 주십시요" />
        </FormItem>
        <FormItem name="password" label="비밀번호" className="text-gray-400">
          <Input type="password" placeholder="비밀번호을 입력해 주십시요" />
        </FormItem>
        {type === "signup" && (
          <FormItem
            name="passwordCheck"
            label="비밀번호 확인"
            className="text-gray-400"
          >
            <Input
              type="password"
              placeholder="비밀번호를 한번더 입력해 주십시요"
            />
          </FormItem>
        )}

        <Button type="submit" className="w-full text-primay text-primary ">
          {type === "signup" ? "이메일 가입" : "이메일 로그인"}
        </Button>
      </Form>

      <p className="mt-12 text-center underline text-sm text-gray-400">
        {type === "signup" ? (
          <Link href="/auth/signin">로그인</Link>
        ) : (
          <Link href="/auth/signup">회원가입</Link>
        )}
      </p>
      <div className="h-36">&nbsp;</div>
    </div>
  );
}

export default AuthFormView;
