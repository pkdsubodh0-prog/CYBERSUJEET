const WHATSAPP_NUMBER = "919471892125"; // The target phone number

const servicesData = [
    {
        category: "Government Certificate Services",
        icon: "fas fa-stamp",
        services: [
            "Caste Certificate Apply", "Income Certificate Apply", "Residence Certificate Apply",
            "Character Certificate Apply", "OBC Certificate Apply", "EWS Certificate Apply",
            "Domicile Certificate Apply", "Non Creamy Layer Certificate", "Residential Proof Certificate",
            "Minority Certificate", "SC/ST Certificate Apply", "Local Resident Certificate",
            "Police Verification Certificate", "Bonafide Certificate", "Family Member Certificate",
            "Rural Residence Certificate"
        ]
    },
    {
        category: "Identity Card Services",
        icon: "fas fa-id-card",
        services: [
            "Aadhaar Card Update", "Aadhaar Mobile Number Update", "Aadhaar Address Update",
            "Aadhaar Name Correction", "Aadhaar Date of Birth Update", "Aadhaar Print",
            "PVC Aadhaar Card Order", "PAN Card Apply", "PAN Card Correction", "Instant PAN Apply",
            "Voter ID Card Apply", "Voter ID Correction", "Voter ID Download", "Ayushman Card Apply",
            "Ayushman Card Download", "Health ID Card Registration", "ABHA Health Card"
        ]
    },
    {
        category: "Driving License & Vehicle Services",
        icon: "fas fa-car",
        services: [
            "Driving License Apply", "Learning License Apply", "Driving License Renewal",
            "Duplicate Driving License", "Driving License Address Change", "Driving License Name Correction",
            "International Driving Permit", "Vehicle RC Download", "RC Transfer", "Vehicle Ownership Transfer",
            "Vehicle Permit Apply", "Vehicle Insurance Renew", "Challan Payment", "Vehicle Registration Apply"
        ]
    },
    {
        category: "Agriculture Services",
        icon: "fas fa-tractor",
        services: [
            "PM Kisan Registration", "Farmer Registration", "Agriculture Subsidy Apply",
            "Animal Husbandry Scheme Apply", "Dairy Loan Apply", "Fishery Scheme Apply"
        ]
    },
    {
        category: "Banking & Financial Services",
        icon: "fas fa-university",
        services: [
            "Money Transfer", "AEPS Cash Withdrawal", "AEPS Balance Check", "Mini Statement",
            "Account Opening", "PAN to Aadhaar Link", "Life Insurance Apply", "General Insurance Apply",
            "Loan Apply", "Personal Loan Apply", "Business Loan Apply", "Credit Card Apply", "Pension Withdrawal"
        ]
    },
    {
        category: "Mobile & Utility Bill Payment",
        icon: "fas fa-mobile-alt",
        services: [
            "Mobile Recharge", "DTH Recharge", "Electricity Bill Payment", "Water Bill Payment",
            "Gas Booking", "LPG Subsidy Check", "FASTag Recharge", "Broadband Bill Payment",
            "Landline Bill Payment", "Postpaid Bill Payment"
        ]
    },
    {
        category: "Education Services",
        icon: "fas fa-user-graduate",
        services: [
            "Scholarship Apply", "Scholarship Status Check", "Bihar Board Form Fill", "CBSE Form Fill",
            "Online Admission Apply", "Exam Form Fill", "Admit Card Download", "Result Check",
            "Migration Certificate Apply", "Duplicate Marksheet Apply", "Student Credit Card Scheme", "University Admission Form"
        ]
    },
    {
        category: "Health Services",
        icon: "fas fa-heartbeat",
        services: [
            "Ayushman Bharat Registration", "Ayushman Card Print", "Health Insurance Apply",
            "COVID Certificate Download", "Hospital Registration", "ABHA Health ID Create", "Vaccination Certificate"
        ]
    },
    {
        category: "Social Welfare Services",
        icon: "fas fa-hands-helping",
        services: [
            "Old Age Pension Apply", "Widow Pension Apply", "Disability Pension Apply",
            "Labour Card Registration", "Labour Card Renewal", "Labour Card Correction",
            "Ration Card Apply", "Ration Card Correction", "NFSA Ration Card Apply", "Pension Status Check"
        ]
    },
    {
        category: "Land & Property Services",
        icon: "fas fa-map-marked-alt",
        services: [
            "Land Record (Khatiyan) Download", "Jamabandi Copy", "Mutation Apply", "Land Map Download",
            "Property Registration", "Land Tax Payment", "Encumbrance Certificate", "Plot Information Check"
        ]
    },
    {
        category: "Online Form Services",
        icon: "fas fa-laptop-code",
        services: [
            "Government Job Form Fill", "Private Job Form Fill", "Railway Job Form", "SSC Job Form",
            "Police Job Form", "Army Job Form", "Navy Job Form", "Air Force Job Form",
            "Banking Job Form", "Teaching Job Form"
        ]
    },
    {
        category: "Travel Services",
        icon: "fas fa-plane-departure",
        services: [
            "Train Ticket Booking", "Flight Ticket Booking", "Bus Ticket Booking", "Hotel Booking",
            "Passport Apply", "Passport Appointment", "Passport Status Check", "Tatkal Ticket Booking"
        ]
    },
    {
        category: "Digital & Computer Services",
        icon: "fas fa-desktop",
        services: [
            "Online Form Filling", "Document Scanning", "Color Printout", "Black & White Print",
            "Photo Print", "Passport Size Photo", "Lamination", "Document Upload", "Email Creation",
            "Resume / CV Creation", "Online Application Upload"
        ]
    },
    {
        category: "Business & Registration Services",
        icon: "fas fa-briefcase",
        services: [
            "GST Registration", "GST Return Filing", "Shop License Apply",
            "MSME Registration", "Trade License Apply", "Company Registration"
        ]
    },
    {
        category: "Other Digital Services",
        icon: "fas fa-cogs",
        services: [
            "DigiLocker Registration", "DigiLocker Document Download", "eShram Card Apply",
            "eShram Card Download", "Labour Scheme Apply", "PM Awas Yojana Apply",
            "PM Awas Status Check", "Swachh Bharat Registration", "Jan Dhan Account Opening",
            "NPS Registration", "Atal Pension Yojana Apply"
        ]
    },
    {
        category: "Additional Services",
        icon: "fas fa-plus-circle",
        services: [
            "Courier Booking", "Speed Post Booking", "Ticket Cancellation", "Online Complaint Registration",
            "Cyber Complaint Apply", "FIR Online Apply", "Court Case Status Check",
            "Electricity New Connection Apply", "Water Connection Apply", "Gas Connection Apply",
            "SIM Card KYC", "SIM Card Activation", "Mobile Number Port", "Internet Connection Apply",
            "WiFi Installation Request", "Data Entry Work", "Typing Work", "Graphic Design Service",
            "Photo Editing Service", "Video Editing Service", "Logo Design Service"
        ]
    }
];

// Map a specific icon to each individual service roughly based on keywords, defaulting to the category icon
function getServiceIconClass(serviceName, defaultIcon) {
    const lowerName = serviceName.toLowerCase();
    if (lowerName.includes("card") || lowerName.includes("pan") || lowerName.includes("aadhaar") || lowerName.includes("voter")) return "fas fa-id-card";
    if (lowerName.includes("certificate") || lowerName.includes("proof")) return "fas fa-certificate";
    if (lowerName.includes("download") || lowerName.includes("print")) return "fas fa-file-download";
    if (lowerName.includes("form") || lowerName.includes("apply") || lowerName.includes("registration")) return "fas fa-file-signature";
    if (lowerName.includes("vehicle") || lowerName.includes("license") || lowerName.includes("driving")) return "fas fa-car-side";
    if (lowerName.includes("ticket") || lowerName.includes("booking")) return "fas fa-ticket-alt";
    if (lowerName.includes("bill") || lowerName.includes("payment") || lowerName.includes("recharge")) return "fas fa-money-bill-wave";
    if (lowerName.includes("job")) return "fas fa-briefcase";
    if (lowerName.includes("photo") || lowerName.includes("design") || lowerName.includes("video")) return "fas fa-palette";
    
    return defaultIcon;
}

document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('categoryFilter');
    const servicesContainer = document.getElementById('servicesContainer');
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Generate HTML for Filters and Services
    let filterHTML = `<button class="filter-btn active" data-filter="all">All Services</button>`;
    
    let servicesHTML = '';

    servicesData.forEach((cat, index) => {
        // Create filter button
        // Generate a safe id string for category
        const catId = `cat-${index}`;
        filterHTML += `<button class="filter-btn" data-filter="${catId}">${cat.category}</button>`;

        // Create category section
        servicesHTML += `
            <div class="category-group" id="${catId}" data-category="${catId}">
                <h3 class="category-title">
                    <i class="${cat.icon}"></i> ${cat.category}
                </h3>
                <div class="services-grid">
        `;

        // Create individual service cards
        cat.services.forEach(service => {
            const encodedText = encodeURIComponent(`Hello Sujeet Cyber Cafe, I want to apply for: *${service}*. Please guide me.`);
            const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
            const serviceIcon = getServiceIconClass(service, cat.icon);

            servicesHTML += `
                <div class="service-card">
                    <div>
                        <i class="${serviceIcon} service-icon"></i>
                        <h4 class="service-name">${service}</h4>
                    </div>
                    <a href="${waLink}" target="_blank" class="btn btn-whatsapp w-100">
                        <i class="fab fa-whatsapp"></i> Apply on WhatsApp
                    </a>
                </div>
            `;
        });

        servicesHTML += `
                </div>
            </div>
        `;
    });

    categoryFilter.innerHTML = filterHTML;
    servicesContainer.innerHTML = servicesHTML;

    // Filter Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categoryGroups = document.querySelectorAll('.category-group');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');

            const targetFilter = btn.getAttribute('data-filter');

            categoryGroups.forEach(group => {
                if (targetFilter === 'all') {
                    group.style.display = 'block';
                } else {
                    if (group.getAttribute('data-category') === targetFilter) {
                        group.style.display = 'block';
                    } else {
                        group.style.display = 'none';
                    }
                }
            });
        });
    });

    // Mobile menu toggle (simple version for this demo)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileBtn.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(13, 17, 23, 0.95)';
            navLinks.style.padding = '20px';
            navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
        }
    });
});
