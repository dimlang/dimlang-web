import {
  Dispatch,
  FunctionComponent,
  ReactElement,
  SetStateAction,
  useState,
} from "react";
import ModalWrapper from "./ModalWrapper";
import { usePathname } from "next/navigation";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useSubscribeToWaitlist } from "@/app/api/apiClient";
import { toast } from "sonner";

interface WaitlistModalProps {
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
}

const WaitlistModal: FunctionComponent<WaitlistModalProps> = ({
  visibility,
  setVisibility,
}): ReactElement => {
  const subscribeToWaitlist = useSubscribeToWaitlist();

  const [preferredContentType, setPreferredContentType] = useState<string>();
  const [preferredPlatform, setPreferredPlatform] = useState<string>();
  //   const [preferredEditMode, setPreferredEditMode] = useState("Select preferred mode of edit");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const unsetValues = () => {
    setFullName("");
    setEmail("");
    setPreferredContentType(undefined);
    setPreferredPlatform(undefined);
  };

  const handleSubmit = async () => {
    if (!fullName || !email) {
      toast.error("Full name and email are required.");
      return;
    }

    setLoading(true);
    try {
      await subscribeToWaitlist({
        fullName,
        email,
        contentType: preferredContentType,
        preferredPlatform,
      });

      toast.success("Successfully joined the waitlist!");
      unsetValues();
      setVisibility(false);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalWrapper
      visibility={visibility}
      setVisibility={setVisibility}
      styles={{
        backgroundColor: "transparent",
        color: "#fff",
        width: "fit-content",
      }}
    >
      <div className="w-full sm:w-[28rem] p-6 md:p-8 rounded-[20px] glass-effect">
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col items-center">
            <h3 className="mb-1 text-xl font-medium">Unlock Early Access</h3>
            <p className="text-white text-[0.8rem] font-normal opacity-80 text-center">
              We're rolling out something special. Be among the first to try it.
            </p>
          </div>
          {/* <span
            className="ml-auto size-8 rounded-full grid place-items-center cursor-pointer hover:bg-white/10 [&_svg_path]:stroke-[#fff] [&_svg_path]:fill-[#fff]"
            onClick={() => setVisibility(false)}
          >
            <Icons.Close />
          </span> */}
        </div>
        <div className="mt-5 flex flex-col gap-4">
          <Input
            placeholder="Full name"
            className="bg-white border-none text-black"
            value={fullName}
            name="fullname"
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            placeholder="Email"
            className="bg-white border-none text-black"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="flex flex-col">
            <label htmlFor="contentType" className="text-xs mb-1">
              What type of content do you create?
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="relative">
                  <Input
                    readOnly
                    className={`text-left bg-white pr-10 cursor-pointer ${
                      preferredContentType ? "text-black" : "text-black/55"
                    }`}
                    value={preferredContentType ?? "Select category"}
                  />
                  <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                    size={16}
                  />
                </div>
                {/* <Input
                  className="text-left bg-white text-black"
                  value={preferredContentType ?? "Select"}
                  onChange={(e) => {}}
                /> */}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {/* <DropdownMenuLabel>Select type</DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                {["Short videos", "Podcasts", "Blog posts", "Tutorials"].map(
                  (option) => (
                    <DropdownMenuItem
                      key={option}
                      onClick={() => setPreferredContentType(option)}
                    >
                      {option}
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex flex-col">
            <label htmlFor="contentPublisher" className="text-xs mb-1">
              Where do you usually publish your content?
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="relative">
                  <Input
                    className={`text-left bg-white pr-10 cursor-pointer ${
                      preferredPlatform ? "text-black" : "text-black/55"
                    }`}
                    value={preferredPlatform ?? "Select platform"}
                    onChange={(e) => {}}
                  />
                  <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                    size={16}
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {/* <DropdownMenuLabel>Select type</DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                {["YouTube", "TikTok", "Instagram", "Substack", "Spotify"].map(
                  (option) => (
                    <DropdownMenuItem
                      key={option}
                      onClick={() => setPreferredPlatform(option)}
                    >
                      {option}
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* <div>
            <label htmlFor="preferredEditMode" className="text-sm mb-1">
              Do you currently edit your audio or video manually?
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Input
                  className="text-left bg-white text-black"
                  value={preferredEditMode ?? "Select"}
                  onChange={(e) => {}}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select type</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {["Yes", "No", "Sometimes"].map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onClick={() => setPreferredEditMode(option)}
                  >
                    {option}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div> */}
        </div>
        <div className="flex flex-col justify-end mt-4 gap-0">
          <button
            onClick={handleSubmit}
            className="bg-primary hover:bg-primary-sub text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 text-sm w-full mt-2"
          >
            {loading ? "Joining..." : "Join the Waitlist"}
          </button>
          <button
            onClick={() => {
              unsetValues();
              setVisibility(false);
            }}
            className="bg-white/10 hover:bg-white/5 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 text-sm w-full mt-2"
          >
            Close
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default WaitlistModal;
