import { site } from "@/content/site";

const DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"] as const;
const DAY_LABELS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export type BusinessStatus =
  | { open: true; closesAt: string }
  | { open: false; opensAt: string; when: string };

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

/** "18:00" → "6:00 pm" */
export function formatTime(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${h >= 12 ? "pm" : "am"}`;
}

function hoursFor(day: number) {
  return site.hours[DAYS[day]] as readonly [string, string] | null;
}

/** Weekday (0 = Sunday) and minutes since midnight in Ghana, whatever the visitor's time zone. */
function ghanaNow(now: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: site.timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const minutes = (Number(get("hour")) % 24) * 60 + Number(get("minute"));
  return { day, minutes };
}

/** Is the business open right now? If not, when does it next open? */
export function getBusinessStatus(now: Date = new Date()): BusinessStatus {
  const { day, minutes } = ghanaNow(now);
  const today = hoursFor(day);

  if (today && minutes >= toMinutes(today[0]) && minutes < toMinutes(today[1])) {
    return { open: true, closesAt: formatTime(today[1]) };
  }
  if (today && minutes < toMinutes(today[0])) {
    return { open: false, opensAt: formatTime(today[0]), when: "today" };
  }
  for (let i = 1; i <= 7; i++) {
    const next = hoursFor((day + i) % 7);
    if (next) {
      return {
        open: false,
        opensAt: formatTime(next[0]),
        when: i === 1 ? "tomorrow" : DAY_LABELS[(day + i) % 7],
      };
    }
  }
  return { open: false, opensAt: "", when: "" };
}

/** Short, human sentence for the status, e.g. "until 6:00 pm" or "Opens tomorrow at 8:00 am". */
export function describeStatus(status: BusinessStatus, showZone = false) {
  const zone = showZone ? " GMT" : "";
  if (status.open) return `until ${status.closesAt}${zone}`;
  if (!status.opensAt) return "";
  return `Opens ${status.when} at ${status.opensAt}${zone}`;
}
