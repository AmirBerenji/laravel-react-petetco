import { Feature } from "@/types";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import FeatureActionsDropdown from "./FeatureActionsDropdown";
import FeatureUpvoteDownvote from "./FeatureUpvoteDownvote";

export default function FeatureItem({ feature }: { feature: Feature }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
      <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8 ">
      <FeatureUpvoteDownvote feature={feature}/>

        <div className="flex-1">
          <Link href={route("feature.show", feature)}>
            <h2 className="text-2xl mb-2">{feature.name}</h2>
          </Link>
          <p>
            {isExpanded
              ? feature.description
              : `${feature.description.slice(0, 200)}...`}
          </p>
          <button
            onClick={toggleReadMore}
            className="text-red-500 hover:underline "
          >
            {isExpanded ? "Read Less" : "Read More..."}
          </button>
          <div className="py-4" >
          <Link href={route('feature.show',feature)} className="inline-flex gap-2 px-3 py-2.5 mb-2 text-sm font-medium text-gray-900
                      focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700
                      focus:z-10 focus:ring-4 focus:ring-gray-100" >
              Comments
          </Link>
        </div>
        </div>
        
      <div>
        <FeatureActionsDropdown feature={feature} />
      </div>
      </div>
    </div>
  );
}
