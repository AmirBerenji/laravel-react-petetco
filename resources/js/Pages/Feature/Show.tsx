import CommentItem from "@/Components/CommentItem";
import FeatureItem from "@/Components/FeatureItem";
import NewCommentForm from "@/Components/NewCommentForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Feature, PaginatedData } from "@/types";
import { Head } from "@inertiajs/react";

export default function Show({ feature }: { feature: Feature }) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Feature <b>{feature.name}</b>
        </h2>
      }
    >
      <Head title={feature.name} />

      <FeatureItem feature={feature} />
      <div className="mt-8 bg-gray-300 rounded-lg px-4 py-7 " >
        <NewCommentForm feature={feature}  />
        <div className="w-full mt-8" >
        {feature.comments.map(comment=>(
          <CommentItem comment={comment} key={comment.id} />
        ))}
        </div>
        
      </div>
    </AuthenticatedLayout>
  );
}
