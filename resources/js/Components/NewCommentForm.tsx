import { Feature } from "@/types";
import React, { FormEventHandler } from "react";
import TextAreaInput from "./TextAreaInput";
import { useForm, usePage } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";
import { can } from "@/helper";

export default function NewCommentForm({ feature }: { feature: Feature }) {
  const user = usePage().props.auth.user;
  const { data, setData, post, processing } = useForm({
    comment: "",
  });

  const createComment: FormEventHandler = (ev) => {
    ev.preventDefault();
    post(route("comment.store", feature.id), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => setData("comment", ""),
    });
  };

  if (!can(user, "manage_comments")) {
    return (
      <div className="text-center text-gra-600">
        you dont have permission to leave comment.
      </div>
    );
  }

  return (
    <form
      onSubmit={createComment}
      className="flex items-center px-3 py-2 rounded-lg bg-gray-50 "
    >
      <label className="sr-only">Your comment</label>
      <div className="w-full">
        <TextAreaInput
          rows={5}
          value={data.comment}
          onChange={(e) => setData("comment", e.target.value)}
          className="mt-1 block w-full"
          placeholder="Your comment"
        ></TextAreaInput>
        <PrimaryButton disabled={processing} className="mt-5">
          Comment
        </PrimaryButton>
      </div>
    </form>
  );
}
