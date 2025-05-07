import {
  Dispatch,
  FunctionComponent,
  ReactElement,
  SetStateAction,
  useState,
} from "react";
import ModalWrapper from "./ModalWrapper";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown, Check } from "lucide-react";
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

  const [preferredContentTypes, setPreferredContentTypes] = useState<string[]>(
    []
  );
  const [preferredPlatforms, setPreferredPlatforms] = useState<string[]>([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const unsetValues = () => {
    setFullName("");
    setEmail("");
    setPreferredContentTypes([]);
    setPreferredPlatforms([]);
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
        contentType: preferredContentTypes,
        preferredPlatform: preferredPlatforms,
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

  const toggleSelection = (
    list: string[],
    setList: Function,
    value: string
  ) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
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
      <>
        <div className="flex flex-col items-center mb-10">
          <h3 className="mb-1 text-xl font-medium">Unlock Early Access</h3>
          <p className="text-white text-[0.8rem] font-normal opacity-80 text-center">
            We're rolling out something special. Be among the first to try it.
          </p>
        </div>
        <div className="w-full sm:w-[28rem] p-6 md:p-10 rounded-[20px] glass-effect">
          <div className="flex flex-row justify-center items-center">
            {/* <div className="flex flex-col items-center">
              <h3 className="mb-1 text-xl font-medium">Unlock Early Access</h3>
              <p className="text-white text-[0.8rem] font-normal opacity-80 text-center">
                We're rolling out something special. Be among the first to try
                it.
              </p>
            </div> */}
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

            {/* Multi-select for Content Types */}
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
                        preferredContentTypes.length > 0
                          ? "text-black"
                          : "text-black/55"
                      }`}
                      value={
                        preferredContentTypes.length > 0
                          ? preferredContentTypes.join(", ")
                          : "Select categories"
                      }
                    />
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                      size={16}
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuSeparator />
                  {["Short videos", "Podcasts", "Blog posts", "Tutorials"].map(
                    (option) => (
                      <DropdownMenuItem
                        key={option}
                        onClick={() =>
                          toggleSelection(
                            preferredContentTypes,
                            setPreferredContentTypes,
                            option
                          )
                        }
                      >
                        <div className="flex items-center">
                          {preferredContentTypes.includes(option) && (
                            <Check className="mr-2 text-primary" size={16} />
                          )}
                          {option}
                        </div>
                      </DropdownMenuItem>
                    )
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Multi-select for Platforms */}
            <div className="flex flex-col">
              <label htmlFor="contentPublisher" className="text-xs mb-1">
                Where do you usually publish your content?
              </label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="relative">
                    <Input
                      readOnly
                      className={`text-left bg-white pr-10 cursor-pointer ${
                        preferredPlatforms.length > 0
                          ? "text-black"
                          : "text-black/55"
                      }`}
                      value={
                        preferredPlatforms.length > 0
                          ? preferredPlatforms.join(", ")
                          : "Select platforms"
                      }
                    />
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                      size={16}
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuSeparator />
                  {[
                    "YouTube",
                    "TikTok",
                    "Instagram",
                    "Substack",
                    "Spotify",
                  ].map((option) => (
                    <DropdownMenuItem
                      key={option}
                      onClick={() =>
                        toggleSelection(
                          preferredPlatforms,
                          setPreferredPlatforms,
                          option
                        )
                      }
                    >
                      <div className="flex items-center">
                        {preferredPlatforms.includes(option) && (
                          <Check className="mr-2 text-primary" size={16} />
                        )}
                        {option}
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
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
      </>
    </ModalWrapper>
  );
};

export default WaitlistModal;
