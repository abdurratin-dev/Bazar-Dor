"use client";
import { authClient } from "@/lib/auth-client";
import { ISignUpDataType } from "@/types/allDataType";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  TextField,
} from "@heroui/react";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsEyeSlash } from "react-icons/bs";

export default function SignUpPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isConVisible, setIsConVisible] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const resData: ISignUpDataType = {
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      password: String(formData.get("password")),
      confirmPassword: String(formData.get("confirmPassword")),
    };
    console.log(resData);
    if (resData.password !== resData.confirmPassword) {
      return toast.error("কনফার্ম পাসওয়ার্ডটি মেলেনি । আবার চেষ্টা করুন");
    }
    const {data,error} = await authClient.signUp.email({
        name: resData.name,
        email: resData.email,
        password: resData.confirmPassword
    })
    return toast.success("আপনার অ্যাকাউন্টটি সফলভাবে তৈরি হয়েছে");
  };
  const signInOnGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};
const signInOnGitHub = async () => {
  const data = await authClient.signIn.social({
    provider: "github",
  });
};

  return (
    <div className="flex flex-col items-center my-20">
      <h2 className="font-bold text-2xl">অ্যাকাউন্ট তৈরি করুন</h2>
      <p className="text-sm text-gray-500 mb-5">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।{" "}
      </p>
      <div className="flex flex-col items-center justify-center gap-4 bg-white border border-gray-300 p-5 rounded-2xl">
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <p className="font-semibold">নাম</p>
            <Input className={`min-h-12 w-full rounded-xl border py-3 pr-4 text-sm outline-none transition  border-[#16864a] bg-white focus:ring-4 focus:ring-[#16864a]/10
              }`} />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <p className="font-semibold">ইমেইল</p>
            <Input className={`min-h-12 w-full rounded-xl border py-3 pr-4 text-sm outline-none transition  border-[#16864a] bg-white focus:ring-4 focus:ring-[#16864a]/10
              }`} />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            className="w-full"
            name="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <p className="font-semibold">পাসওয়ার্ড</p>
            <InputGroup className={`min-h-12 w-full rounded-xl border pr-4 text-sm outline-none transition  border-[#16864a] bg-white focus:ring-4 focus:ring-[#16864a]/10
              }`}>
              <InputGroup.Input
                className="w-full"
                type={isVisible ? "text" : "password"}
              />
              <InputGroup.Suffix className="pe-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <BsEyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            className="w-full"
            name="confirmPassword"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <p className="font-semibold">পাসওয়ার্ড নিশ্চিত করুন</p>
            <InputGroup className={`min-h-12 w-full rounded-xl border pr-4 text-sm outline-none transition  border-[#16864a] bg-white focus:ring-4 focus:ring-[#16864a]/10
              }`}>
              <InputGroup.Input
                className="w-full"
                type={isConVisible ? "text" : "password"}
              />
              <InputGroup.Suffix className="pe-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsConVisible(!isConVisible)}
                >
                  {isConVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <BsEyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button
              type="submit"
              className="flex-1 rounded-lg bg-[#05893E] font-semibold text-white hover:bg-[#109e4d]"
            >
              সাইন আপ
            </Button>
          </div>
        </Form>
        <div className="grid grid-cols-3 items-center w-full text-gray-400">
          <hr />
          <p className="text-center">অথবা</p>
          <hr />
        </div>
        <div className="flex justify-between w-full gap-2">
          <Button onClick={signInOnGoogle} className="flex-1 rounded-lg bg-[#E2F0E7] font-semibold text-[#05893E] hover:bg-[#d1e8d9]">
            Google দিয়ে চালিয়ে যান
          </Button>
          <Button onClick={signInOnGitHub} className="flex-1 rounded-lg bg-[#E2F0E7] font-semibold text-[#05893E] hover:bg-[#d1e8d9]">
            GitHub দিয়ে চালিয়ে যান
          </Button>
        </div>
        <p>
          অ্যাকাউন্ট আছে?{" "}
          <Link href='/signin' className="font-semibold text-[#05893E]">সাইন ইন করুন</Link>
        </p>
      </div>
    </div>
  );
}
