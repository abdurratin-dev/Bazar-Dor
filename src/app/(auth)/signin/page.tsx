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
import { email } from "better-auth";
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
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    };
    const { data, error } = await authClient.signIn.email({
      email: resData.email,
      password: resData.password,
    });
    console.log(data);
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
      <h2 className="font-bold text-2xl">সাইন ইন</h2>
      <p className="text-sm text-gray-500 mb-5">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>
      <div className="flex flex-col items-center justify-center gap-4 bg-white border border-gray-300 p-5 rounded-2xl">
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
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
            <Input
              className={`min-h-12 w-full rounded-xl border py-3 pr-4 text-sm outline-none transition  border-[#16864a] bg-white focus:ring-4 focus:ring-[#16864a]/10
              }`}
            />
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
            <p className="font-semibold">পাসওয়ার্ড নিশ্চিত করুন</p>
            <InputGroup className={`min-h-12 w-full rounded-xl border pr-4 text-sm outline-none transition border-[#16864a] bg-white focus:ring-4 focus:ring-[#16864a]/10
              }`}>
              <InputGroup.Input
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
              সাইন ইন
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
          অ্যাকাউন্ট নেই?
          <Link href="/signup" className="font-semibold text-[#05893E]">
            {" "}
            সাইন আপ করুন
          </Link>
        </p>
      </div>
    </div>
  );
}
