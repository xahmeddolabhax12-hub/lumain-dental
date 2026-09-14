document.addEventListener("DOMContentLoaded", function () {
    /* =========================
       Mobile Menu
    ========================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", function () {
            mainNav.classList.toggle("show");
        });

        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                mainNav.classList.remove("show");
            });
        });
    }

    /* =========================
       Appointment Form
    ========================= */

    const appointmentForm = document.getElementById("appointmentForm");
    const successMessage = document.getElementById("successMessage");

    const appointmentDateInput =
        document.getElementById("appointmentDate");

    if (appointmentDateInput) {
        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        appointmentDateInput.min = `${year}-${month}-${day}`;
    }

    if (appointmentForm) {
        appointmentForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const patientName =
                document.getElementById("patientName").value.trim();

            const patientPhone =
                document.getElementById("patientPhone").value.trim();

            const service =
                document.getElementById("service").value;

            const doctor =
                document.getElementById("doctor").value ||
                "لا يوجد تفضيل";

            const appointmentDate =
                document.getElementById("appointmentDate").value;

            const appointmentTime =
                document.getElementById("appointmentTime").value;

            const notes =
                document.getElementById("notes").value.trim() ||
                "لا توجد ملاحظات";

            if (
                !patientName ||
                !patientPhone ||
                !service ||
                !appointmentDate ||
                !appointmentTime
            ) {
                if (successMessage) {
                    successMessage.style.display = "block";
                    successMessage.style.background = "#fff0f0";
                    successMessage.style.color = "#a33a3a";
                    successMessage.style.borderColor = "#e6b8b8";

                    successMessage.textContent =
                        "من فضلك أكمل كل البيانات المطلوبة.";
                }

                return;
            }

            const message =
                `مرحبًا، أريد طلب حجز موعد في عيادة لومينا\n\n` +
                `الاسم: ${patientName}\n` +
                `رقم الهاتف: ${patientPhone}\n` +
                `الخدمة: ${service}\n` +
                `الطبيب المفضل: ${doctor}\n` +
                `التاريخ: ${appointmentDate}\n` +
                `الوقت: ${appointmentTime}\n` +
                `ملاحظات: ${notes}`;

            const clinicWhatsAppNumber = "201000000000";

            const whatsappURL =
                `https://wa.me/${clinicWhatsAppNumber}?text=${encodeURIComponent(message)}`;

            if (successMessage) {
                successMessage.style.display = "block";
                successMessage.style.background = "#e7f4e9";
                successMessage.style.color = "#28723d";
                successMessage.style.borderColor = "#b9dfc0";

                successMessage.innerHTML = `
                    <strong>تم تجهيز طلب الحجز بنجاح.</strong>
                    <br>
                    سيتم فتح واتساب لإرسال تفاصيل الطلب.
                `;
            }

            setTimeout(function () {
                window.open(whatsappURL, "_blank");
            }, 700);
        });
    }

    /* =========================
       Contact Form
    ========================= */

    const contactForm = document.getElementById("contactForm");
    const contactSuccess = document.getElementById("contactSuccess");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const contactName =
                document.getElementById("contactName").value.trim();

            const contactPhone =
                document.getElementById("contactPhone").value.trim();

            const contactEmail =
                document.getElementById("contactEmail").value.trim() ||
                "غير مذكور";

            const contactSubject =
                document.getElementById("contactSubject").value;

            const contactMessage =
                document.getElementById("contactMessage").value.trim();

            if (
                !contactName ||
                !contactPhone ||
                !contactSubject ||
                !contactMessage
            ) {
                if (contactSuccess) {
                    contactSuccess.style.display = "block";
                    contactSuccess.style.background = "#fff0f0";
                    contactSuccess.style.color = "#a33a3a";
                    contactSuccess.style.borderColor = "#e6b8b8";

                    contactSuccess.textContent =
                        "من فضلك أكمل البيانات المطلوبة.";
                }

                return;
            }

            const message =
                `مرحبًا، لدي رسالة جديدة إلى عيادة لومينا\n\n` +
                `الاسم: ${contactName}\n` +
                `رقم الهاتف: ${contactPhone}\n` +
                `البريد الإلكتروني: ${contactEmail}\n` +
                `موضوع الرسالة: ${contactSubject}\n` +
                `الرسالة: ${contactMessage}`;

            const clinicWhatsAppNumber = "201000000000";

            const whatsappURL =
                `https://wa.me/${clinicWhatsAppNumber}?text=${encodeURIComponent(message)}`;

            if (contactSuccess) {
                contactSuccess.style.display = "block";
                contactSuccess.style.background = "#e7f4e9";
                contactSuccess.style.color = "#28723d";
                contactSuccess.style.borderColor = "#b9dfc0";

                contactSuccess.innerHTML = `
                    <strong>تم تجهيز رسالتك بنجاح.</strong>
                    <br>
                    سيتم فتح واتساب لإرسال الرسالة.
                `;
            }

            setTimeout(function () {
                window.open(whatsappURL, "_blank");
            }, 700);
        });
    }
});