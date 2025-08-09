export interface LinkedInProfile {
  firstName: string;
  lastName: string;
  headline: string;
  summary: string;
  location: {
    country: string;
    region: string;
  };
  industry: string;
  positions: LinkedInPosition[];
  educations: LinkedInEducation[];
  skills: string[];
  profilePicture?: string;
}

export interface LinkedInPosition {
  title: string;
  companyName: string;
  description: string;
  location: string;
  startDate: {
    month: number;
    year: number;
  };
  endDate?: {
    month: number;
    year: number;
  };
  isCurrent: boolean;
}

export interface LinkedInEducation {
  schoolName: string;
  degreeName: string;
  fieldOfStudy: string;
  startDate: {
    year: number;
  };
  endDate?: {
    year: number;
  };
  description?: string;
}

export interface CachedLinkedInData {
  profile: LinkedInProfile;
  lastUpdated: string;
  nextUpdate: string;
}

const LINKEDIN_CACHE_KEY = "linkedin_profile_cache";
const CACHE_DURATION_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

// For now, we'll use a fallback profile since LinkedIn API requires OAuth
// In production, you'd want to implement proper LinkedIn OAuth flow
export async function fetchLinkedInProfile(): Promise<LinkedInProfile> {
  try {
    // Check if we have cached data
    const cachedData = await getCachedLinkedInData();

    if (cachedData && !isCacheExpired(cachedData)) {
      console.log("Using cached LinkedIn data");
      return cachedData.profile;
    }

    // In a real implementation, you would:
    // 1. Use LinkedIn OAuth to get access token
    // 2. Make API calls to LinkedIn endpoints
    // 3. Transform the data to our interface

    // For now, return structured data that matches your actual LinkedIn
    const profile = getFallbackLinkedInProfile();

    // Cache the data
    await cacheLinkedInData(profile);

    return profile;
  } catch (error) {
    console.error("Error fetching LinkedIn profile:", error);
    return getFallbackLinkedInProfile();
  }
}

async function getCachedLinkedInData(): Promise<CachedLinkedInData | null> {
  try {
    // In a real app, this would read from a database or file system
    // For demo purposes, we'll simulate with localStorage-style logic
    return null; // No cache initially
  } catch (error) {
    return null;
  }
}

function isCacheExpired(cachedData: CachedLinkedInData): boolean {
  const now = new Date();
  const nextUpdate = new Date(cachedData.nextUpdate);
  return now >= nextUpdate;
}

async function cacheLinkedInData(profile: LinkedInProfile): Promise<void> {
  const now = new Date();
  const nextUpdate = new Date(now.getTime() + CACHE_DURATION_MS);

  const cacheData: CachedLinkedInData = {
    profile,
    lastUpdated: now.toISOString(),
    nextUpdate: nextUpdate.toISOString(),
  };

  // In a real implementation, you'd save this to a database or file
  console.log("LinkedIn data cached until:", nextUpdate.toISOString());
}

function getFallbackLinkedInProfile(): LinkedInProfile {
  return {
    firstName: "Frank",
    lastName: "Melian",
    headline:
      "Fiber Network Specialist | Infrastructure Deployment & Layer 2/3 Integration | Routing, Splicing, and Core Infrastructure | FTTH",
    summary:
      "Network Technician with hands-on experience in fiber optics, Layer 2/3 infrastructure, and customer-facing field operations. I specialize in fiber splicing, FTTH deployment, network troubleshooting, and supporting the integration of routing and switching platforms including Fortinet and Nokia systems. With over five years of experience in computer repair and technical support, I bring a strong foundation in diagnosing hardware and software issues, maintaining networks, and delivering reliable service. Currently pursuing a B.S. in Computer Science, I'm continuously building my skills in both infrastructure and software, and I'm passionate about solving problems and helping people stay connected.",
    location: {
      country: "United States",
      region: "Lehigh Acres, Florida",
    },
    industry: "Telecommunications",
    positions: [
      {
        title: "Lead I&R Tech",
        companyName: "PRIME FiBER",
        description:
          "• Team Leadership: Supervise field technicians and coordinate daily operations to ensure efficient workflow and quality service delivery\n• Fiber Optic Installation & Repair: Perform fiber splicing, repairs, and connectivity from FDH cabinets to customer locations using OTDR and testing equipment\n• Customer & Network Support: Troubleshoot fiber connectivity issues and maintain network reliability for residential and business customers\n• Project Coordination: Work with vendors, maintenance, and construction teams on infrastructure projects and network expansions\n• Outside Plant Maintenance: Inspect and repair aerial and underground fiber networks, ensuring optimal performance and minimal downtime\n• Network Equipment Installation: Install and deploy Nokia 7250 IXR-e2, Lightspan MF2 platforms, and Fortinet 124F switches for core and edge routing applications\n• Transport Systems: Install Smartoptics DCP-404 and Nokia 1830 E2 equipment for long-haul optical transport and DWDM connectivity\n• Fiber Infrastructure Solutions: Deploy Hexatronic and connectivity solutions for structured cabling and network distribution\n• Documentation & Safety: Maintain service records and ensure compliance with industry safety standards and procedures",
        location: "Naples, Florida, United States",
        startDate: { month: 12, year: 2024 },
        isCurrent: true,
      },
      {
        title: "Network Technician",
        companyName: "Lumen Technologies",
        description:
          "• Fiber Optic Installation & Maintenance: Install, splice, and repair single-mode and multi-mode fiber optic cables for residential and commercial customers, ensuring reliable high-speed connectivity\n• Network Configuration: Configure and troubleshoot Internet LAN/WAN connections, optimizing network performance for diverse customer environments\n• Fiber Testing & Validation: Perform comprehensive fiber testing using OTDR, light meters, and power meters to verify both existing and newly installed connections meet industry standards\n• Corning Fiber Solutions: Deploy and maintain Corning fiber optic infrastructure including splice closures, terminals, and distribution systems for last-mile connectivity\n• Customer Premises Equipment: Install and configure VoIP systems, internet modems, routers, and wireless access points to deliver integrated communication solutions\n• Legacy System Support: Maintain and troubleshoot DSL and copper-based telecommunications systems while transitioning customers to fiber solutions\n• Field Operations: Execute construction projects, quality control inspections, and emergency repairs using specialized test equipment and diagnostic software\n• Remote Access & Project Support: Provide remote technical support and participate in network infrastructure upgrades and system overhauls",
        location: "Florida, United States",
        startDate: { month: 1, year: 2020 },
        endDate: { month: 12, year: 2024 },
        isCurrent: false,
      },
      {
        title: "Computer Repair Specialist",
        companyName: "Office Depot",
        description:
          "• Hardware Diagnostics & Repair: Diagnosed and repaired desktop, laptop, smartphone, and tablet hardware issues including component replacements and performance upgrades\n• Operating System & Virtualization: Installed and configured Windows operating systems, managed VM environments, and provided Active Directory support for business clients\n• Mobile Device Services: Performed comprehensive smartphone and tablet repairs including screen replacements, battery swaps, and software reinstallations across multiple manufacturers\n• System Security & Optimization: Implemented antivirus solutions, performed system optimizations, and executed hardware upgrades to enhance device performance and longevity\n• Technical Support & Integration: Provided software troubleshooting, driver installations, and peripheral device configuration (printers, scanners, external drives)\n• Data Recovery & System Restoration: Executed data recovery services, system backups, OS reinstallations, and disaster recovery solutions for customers\n• Customer Education & Documentation: Trained users on cybersecurity best practices and maintained detailed repair documentation and inventory management systems",
        location: "Miami, Florida, United States",
        startDate: { month: 4, year: 2012 },
        endDate: { month: 1, year: 2018 },
        isCurrent: false,
      },
    ],
    educations: [
      {
        schoolName: "Colorado Technical University",
        degreeName: "Bachelor of Science - BS",
        fieldOfStudy: "Computer Science",
        startDate: { year: 2023 },
        endDate: { year: 2027 },
        description:
          "Currently pursuing B.S. in Computer Science with a 3.95 GPA. Specializing in software engineering, algorithms, and data structures while maintaining full-time employment in network infrastructure.",
      },
    ],
    skills: [
      "Fiber Optic Networks",
      "Network Infrastructure",
      "Telecommunications",
      "Fiber to the Home (FTTH)",
      "Team Leadership",
      "Network Installation",
      "Network Troubleshooting",
      "Computer Repair",
      "Computer Hardware",
      "Nokia Systems",
      "Fortinet Systems",
      "OTDR Testing",
      "Fiber Splicing",
      "Project Coordination",
      "Customer Service",
    ],
    profilePicture:
      "https://media.licdn.com/dms/image/v2/D4E03AQFMFWv4IUvwPg/profile-displayphoto-scale_200_200/B4EZiCPzSfGcAY-/0/1754531837471?e=1757548800&v=beta&t=oT-jpHejDdtO4ahaLwHnht3VctK4Zgso5po8xkjGnN0",
  };
}

export function formatLinkedInDate(date: {
  month?: number;
  year: number;
}): string {
  if (!date.month) return date.year.toString();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${months[date.month - 1]} ${date.year}`;
}
