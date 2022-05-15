import { Button } from "@carrot-farm/mongsil-ui";
import { NextPage } from "next";
import { Email } from "../../components/atoms/Icon";

const CheckEmail: NextPage = () => {
  return (
    <div className="container m-auto">
      <h1 className="mt-32 mb-10 text-2xl font-bold text-gray-500 text-center">
        가입 이메일을 확인 하세요
      </h1>

      <Email className="mb-10 m-auto" />

      <Button className="text-primary w-full">이메일 재전송</Button>
    </div>
  );
};

export default CheckEmail;
