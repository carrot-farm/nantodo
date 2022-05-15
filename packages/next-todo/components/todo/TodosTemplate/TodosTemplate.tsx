import { Button } from "@carrot-farm/mongsil-ui";
import { Check, CheckFill, MoreVertical, Person } from "../../atoms/Icon";
import CheckOutline from "../../atoms/Icon/CheckOutline";
import IconButton from "../../atoms/IconButton";

function TodosTemplate() {
  return (
    <div className="flex flex-col h-screen">
      {/* ===== header ===== */}
      <div>
        <div className="container m-auto flex items-center h-14">
          <div className="font-bold text-sm text-gray-500 mr-2">All</div>
          <div className="flex-1 overflow-x-auto ">
            <div className="flex space-x-4 flex-nowrap text-xs text-gray-400">
              <span className="flex-grow-0 flex-shrink-0 flex-auto">
                여행가기
              </span>
              <span className="flex-grow-0 flex-shrink-0 flex-auto">
                여행가기
              </span>
              <span className="flex-grow-0 flex-shrink-0 flex-auto">
                여행가기
              </span>
              <span className="flex-grow-0 flex-shrink-0 flex-auto">
                여행가기
              </span>
              <span className="flex-grow-0 flex-shrink-0 flex-auto">
                여행가기
              </span>
              <span className="flex-grow-0 flex-shrink-0 flex-auto">
                여행가기
              </span>
            </div>
          </div>
          <div className="ml-2">
            <Button
              className="rounded-full w-8 h-8 p-0 flex items-center justify-center text-gray-500"
              variant="dent"
            >
              <MoreVertical />
            </Button>
          </div>
        </div>
      </div>

      {/* ===== body ===== */}
      <div className="flex-1 overflow-y-auto">
        <ul className="mt-6 space-y-4 m-auto container">
          {Array.from({ length: 10 }, (_, index: number) => (
            <li
              className="flex items-center p-4 bg-white rounded-md opacity-70 shadow-xl"
              key={index}
            >
              <div className="mr-2">
                <IconButton variant="dent">
                  <Check />
                </IconButton>
              </div>
              <div className="text-gray-500 line-clamp-3">
                할일1 텍스트 할일1 텍스트할일1 텍스트할일1 텍스트할일1
                텍스트할일1 텍스트할일1 텍스트할일1 텍스트할일1 텍스트 할일1
                텍스트할일1 텍스트할일1 텍스트할일1 텍스트할일1 텍스트할일1
                텍스트할일1 텍스트할일1 텍스트 할일1 텍스트할일1 텍스트할일1
                텍스트할일1 텍스트할일1 텍스트할일1 텍스트할일1 텍스트할일1
                텍스트
              </div>
            </li>
          ))}
        </ul>
        <div className="w-full h-14">&nbsp;</div>
      </div>

      {/* ===== bottom ===== */}
      <div className="w-full h-14">&nbsp;</div>
      <div className="flex items-center justify-around fixed bottom-0 w-full h-14 bg-base">
        <IconButton>
          <CheckOutline color="#70a9ff" />
        </IconButton>
        <IconButton>
          <CheckFill />
        </IconButton>
        <IconButton>
          <Person />
        </IconButton>
      </div>
    </div>
  );
}

export default TodosTemplate;
