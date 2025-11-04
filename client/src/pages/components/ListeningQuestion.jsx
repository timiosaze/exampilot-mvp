const ListeningQuestion = ({ question }) => {
  return (
    <div className="flex flex-col xl:px-10 px-2 mx-2 text-[#525866]">
      <p className="text-sm text-[#525866] mb-8">Question {number} of 8</p>

      <div class="flex items-center mb-2 ">
        <input
          id="default-radio-1"
          type="radio"
          value="optionA"
          name={`answer[${key}]`}
          class="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="default-radio-1" class="ms-2 text-sm font-medium ">
          {questions[key].optionA}
        </label>
      </div>
      <div class="flex items-center mb-2">
        <input
          id="default-radio-2"
          type="radio"
          value="optionB"
          name={`answer[${key}]`}
          class="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="default-radio-2" class="ms-2 text-sm font-medium ">
          {questions[key].optionB}
        </label>
      </div>
      <div class="flex items-center mb-2">
        <input
          id="default-radio-3"
          type="radio"
          value="optionC"
          name={`answer[${key}]`}
          class="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="default-radio-3" class="ms-2 text-sm font-medium ">
          {questions[key].optionC}
        </label>
      </div>
      <div class="flex items-center mb-2">
        <input
          id="default-radio-4"
          type="radio"
          value="optionD"
          name={`answer[${key}]`}
          class="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label class="ms-2 text-sm font-medium ">
          {questions[key].optionD}
        </label>
      </div>
    </div>
  );
};
export default ListeningQuestion;
