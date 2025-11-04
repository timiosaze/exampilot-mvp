import { HeadphonesIcon, BookOpenText, PenLineIcon, Mic } from "lucide-react";

const StatsGrid = ({ testResults }) => {
  const reading = Math.ceil(
    (testResults.reading.scores_array.reduce(
      (accumulator, currentvalue) => accumulator + currentvalue,
      0
    ) *
      12) /
      37
  );
  const writing = Math.ceil(
    testResults.writing.scores_array.reduce(
      (accumulator, currentvalue) => accumulator + currentvalue,
      0
    ) / 2
  );
  const speaking = Math.ceil(
    testResults.speaking.scores_array.reduce(
      (accumulator, currentvalue) => accumulator + currentvalue,
      0
    ) / 8
  );

  const stats = [
    {
      title: "Listening",
      value: testResults.listening ? testResults.listening : 0.0,
      icon: HeadphonesIcon,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      width: testResults.listening ? (testResults.listening * 100) / 12 : 0,
    },
    {
      title: "Reading",
      value: reading ? reading : 0.0,
      icon: BookOpenText,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      width: reading ? (reading * 100) / 12 : 0,
    },
    {
      title: "Writing",
      value: writing ? writing : 0.0,
      icon: PenLineIcon,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      width: writing ? (writing * 100) / 12 : 0,
    },
    {
      title: "Speaking",
      value: speaking ? speaking : 0.0,
      icon: Mic,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      width: speaking ? (speaking * 100) / 12 : 0,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:mx-12 mx-4 ">
      {stats.map((stat, index) => {
        return (
          <div
            className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 hover:shadow-xl hover:shadow-slate-200/20 transition-all duration-300 group"
            key={index}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600 mb-2">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-slate-800 mb-4">
                  {stat.value}
                </p>
              </div>
              <div
                className={`p-3 rounded-xl group-hover:scale-110 ${stat.bgColor} transition-all duration-300`}
              >
                {<stat.icon className={`w-6 h-6 ${stat.textColor}`} />}
              </div>
            </div>
            {/* {ProgressBar} */}
            <div className="mt-4 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r rounded-full ${stat.color} transition-all duration-100`}
                style={{ width: `${stat.width}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default StatsGrid;
