document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    const sendBtn = document.getElementById("sendBtn");
    const themeToggle = document.getElementById("themeToggle");
    const clearChatBtn = document.getElementById("clearChatBtn");
    const newChatBtn = document.getElementById("newChatBtn");
    const historyBtn = document.getElementById("historyBtn");
    const settingsBtn = document.getElementById("settingsBtn");
    const authBtn = document.getElementById("authBtn");
    const jokeBtn = document.getElementById("jokeBtn");
    const tipBtn = document.getElementById("tipBtn");
    const timeBtn = document.getElementById("timeBtn");
    const capitalBtn = document.getElementById("capitalBtn");
    const currencyBtn = document.getElementById("currencyBtn");
    const mathBtn = document.getElementById("mathBtn");
    const loading = document.getElementById("loading");
    const aiNameHeader = document.getElementById("aiNameHeader");

    let settings = {
      autoScroll: true,
      welcomeMessage: "مرحبًا بك في Falafel AI! 😊 كيف يمكنني مساعدتك؟",
      aiName: "Falafel AI"
    };

    const greetings = {
      "السلام عليكم": "وعليكم السلام 👋",
      "السلام عليكم و رحمة الله": "وعليكم السلام ورحمة الله 😊",
      "السلام عليكم و رحمة الله و بركاته": "وعليكم السلام ورحمة الله وبركاته 🌸",
      "كيف حالك": "بخير ولله الحمد، وأنت؟",
      "كيف حلك": "أنا بخير، شكراً لسؤالك! 💚",
      "هلا": "هلا وغلا 🌟",
      "مرحبا": "مرحبا بك! 😊",
      "أهلاً": "أهلاً وسهلاً! 🙌"
    };

    const jokes = [
      "ليش الكمبيوتر ما يقدر يلعب كرة؟ لأنه دايم يعلق 😂",
      "مرة واحد ذهب للطبيب قال له: عندي ذاكرة ضعيفة، الطبيب قال له: من متى؟ قال: من متى إيش؟ 🤣",
      "الذكي هو اللي يعرف إن النكتة بايخة ويضحك مجاملة 😅",
      "فيه سمكة تسبح وتقول: بلل بلل بلل! 🐟",
      "واحد نام متأخر، حلم متأخر! 😂"
    ];

    const tips = [
      "اشرب ماء كثير لتبقى نشيطًا! 💧",
      "جرب تعلم كلمة جديدة كل يوم! 📚",
      "الابتسامة سر السعادة! 😊",
      "خذ استراحة قصيرة كل ساعة! ☕",
      "نظم وقتك لتحقق أهدافك! ✅"
    ];

    const mathOperations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "×": (a, b) => a * b,
      "*": (a, b) => a * b,
      "÷": (a, b) => b !== 0 ? a / b : "لا يمكن القسمة على صفر"
    };

    const capitals = {
      "مصر": "القاهرة",
      "السعودية": "الرياض",
      "اليمن": "صنعاء",
      "سوريا": "دمشق",
      "العراق": "بغداد",
      "لبنان": "بيروت",
      "الجزائر": "الجزائر العاصمة",
      "تونس": "تونس العاصمة",
      "فلسطين": "القدس",
      "الإمارات": "أبوظبي",
      "الكويت": "الكويت العاصمة",
      "قطر": "الدوحة",
      "البحرين": "المنامة",
      "عمان": "مسقط",
      "الأردن": "عمان",
      "المغرب": "الرباط",
      "موريتانيا": "نواكشوط",
      "السودان": "الخرطوم",
      "ليبيا": "طرابلس",
      "الصومال": "مقديشو",
      "جيبوتي": "جيبوتي",
      "ملاوي": "ليلونغوي",
      "أثيوبيا": "أديس أبابا",
      "كينيا": "نيروبي",
      "جنوب أفريقيا": "بريتوريا",
      "ناميبيا": "ويندهوك",
      "أوغندا": "كامبالا",
      "غانا": "أكرا",
      "نيجيريا": "أبوجا",
      "جنوب السودان": "جوبا",
      "تنزانيا": "دودوما",
      "كندا": "أوتاوا",
      "الولايات المتحدة": "واشنطن العاصمة",
      "المكسيك": "مكسيكو سيتي",
      "البرازيل": "برازيليا",
      "الأرجنتين": "بوينس آيرس",
      "كولومبيا": "بوغوتا",
      "بيرو": "ليما",
      "تشيلي": "سانتياغو",
      "الإكوادور": "كيتو",
      "فرنسا": "باريس",
      "ألمانيا": "برلين",
      "إيطاليا": "روما",
      "إسبانيا": "مدريد",
      "البرتغال": "لشبونة",
      "بلجيكا": "بروكسل",
      "هولندا": "أمستردام",
      "سويسرا": "برن",
      "النمسا": "فيينا",
      "المملكة المتحدة": "لندن",
      "السويد": "ستوكهولم",
      "النرويج": "أوسلو",
      "الدنمارك": "كوبنهاجن",
      "فنلندا": "هلسنكي",
      "روسيا": "موسكو",
      "الصين": "بكين",
      "اليابان": "طوكيو",
      "كوريا الجنوبية": "سيول",
      "الهند": "نيودلهي",
      "أستراليا": "كانبرا",
      "نيوزيلندا": "ويلينغتون",
      "إندونيسيا": "جاكرتا",
      "ماليزيا": "كوالالمبور",
      "تايلاند": "بانكوك",
      "سنغافورة": "سنغافورة",
      "الفلبين": "مانيلا",
      "فيتنام": "هانوي",
      "كوريا الشمالية": "بيونغ يانغ",
      "باكستان": "إسلام آباد",
      "بنغلاديش": "دكا",
      "سريلانكا": "كولومبو",
      "موزمبيق": "مابوتو",
      "زيمبابوي": "هراري"
    };

    const currencies = {
      "مصر": "الجنيه المصري",
      "السعودية": "الريال السعودي",
      "اليمن": "الريال اليمني",
      "سوريا": "الليرة السورية",
      "العراق": "الدينار العراقي",
      "لبنان": "الليرة اللبنانية",
      "الجزائر": "الدينار الجزائري",
      "تونس": "الدينار التونسي",
      "فلسطين": "الشيكل",
      "الإمارات": "الدرهم الإماراتي",
      "الكويت": "الدينار الكويتي",
      "قطر": "الريال القطري",
      "البحرين": "الدينار البحريني",
      "عمان": "الريال العماني",
      "الأردن": "الدينار الأردني",
      "المغرب": "الدرهم المغربي",
      "السودان": "الجنيه السوداني",
      "ليبيا": "الدينار الليبي",
      "الولايات المتحدة": "الدولار الأمريكي",
      "فرنسا": "اليورو",
      "ألمانيا": "اليورو",
      "إيطاليا": "اليورو",
      "إسبانيا": "اليورو",
      "البرتغال": "اليورو",
      "السويد": "الكرونا السويدية"
    };

    function addBubble(text, type, extraClass = "") {
      const bubble = document.createElement("div");
      bubble.className = `${type} ${extraClass}`;
      bubble.innerHTML = text;
      output.appendChild(bubble);
      if (settings.autoScroll) {
        output.scrollTop = output.scrollHeight;
      }
    }

    function reply(message) {
      if (!message.trim()) {
        addBubble("يرجى إدخال سؤال أو رسالة.", "bot");
        return;
      }

      loading.classList.remove("hidden");
      setTimeout(() => {
        const text = message.trim();
        addBubble(text, "user");
        const isDarkMode = document.body.classList.contains("dark-mode");

        if (greetings[text]) {
          addBubble(greetings[text], "bot");
        } else if (text === "نكتة" || text.includes("نكتة")) {
          const random = jokes[Math.floor(Math.random() * jokes.length)];
          addBubble(random, "bot");
        } else if (text === "نصيحة" || text.includes("نصيحة")) {
          const random = tips[Math.floor(Math.random() * tips.length)];
          const emoji = isDarkMode ? "🌟" : "⭐";
          addBubble(`${random} ${emoji}`, "bot", "tip");
        } else if (text === "الوقت" || text.includes("الوقت")) {
          const time = new Date().toLocaleTimeString("ar-EG");
          const emoji = isDarkMode ? "⏰" : "🕰️";
          addBubble(`الساعة الآن: ${time} ${emoji}`, "bot", "time");
        } else if (text.includes("عاصمة")) {
          const country = text.replace(/^عاصمة\s*/, "").trim();
          if (!country) {
            addBubble("يرجى تحديد اسم الدولة.", "bot");
          } else {
            const cap = capitals[country];
            addBubble(cap ? `عاصمة ${country} هي ${cap}` : "لم أتعرف على اسم الدولة.", "bot");
          }
        } else if (text.includes("عملة")) {
          const country = text.replace(/^عملة\s*/, "").trim();
          if (!country) {
            addBubble("يرجى تحديد اسم الدولة.", "bot");
          } else {
            const currency = currencies[country];
            addBubble(currency ? `عملة ${country} هي ${currency}` : "لم أتعرف على اسم الدولة.", "bot");
          }
        } else if (text.includes("حساب")) {
          const expression = text.replace(/^حساب\s*/, "").trim();
          if (/^[-+]?[0-9]*\.?[0-9]+(\s*[-+×÷*]\s*[-+]?[0-9]*\.?[0-9]+)$/.test(expression)) {
            const parts = expression.split(/[-+×÷*]/).map(p => parseFloat(p.trim()));
            const op = expression.match(/[-+×÷*]/)[0];
            const result = mathOperations[op](parts[0], parts[1]);
            addBubble(`نتيجة ${expression} هي ${result}`, "bot");
          } else {
            addBubble("يرجى إدخال عملية حسابية صحيحة (مثال: 5 + 3).", "bot");
          }
        } else {
          addBubble("عذرًا، لم أفهم سؤالك جيدًا. حاول مرة أخرى!", "bot");
        }
        loading.classList.add("hidden");
      }, 500);
    }

    function saveChat() {
      localStorage.setItem("currentChat", output.innerHTML);
    }

    function loadChat() {
      output.innerHTML = localStorage.getItem("currentChat") || "";
      if (settings.autoScroll) {
        output.scrollTop = output.scrollHeight;
      }
      if (!output.innerHTML && localStorage.getItem("user")) {
        const user = localStorage.getItem("user");
        addBubble(`مرحبًا بك في ${settings.aiName}! 😊 مرحبًا ${user}!`, "bot");
      }
    }

    function saveChatToHistory() {
      if (!output.innerHTML) return;
      const chats = JSON.parse(localStorage.getItem("chatHistory") || "[]");
      const timestamp = new Date().toLocaleString("ar-EG");
      chats.push({
        id: Date.now(),
        timestamp,
        content: output.innerHTML
      });
      localStorage.setItem("chatHistory", JSON.stringify(chats));
    }

    function showChatHistory() {
      const chats = JSON.parse(localStorage.getItem("chatHistory") || "[]");
      if (chats.length === 0) {
        addBubble("لا توجد محادثات محفوظة.", "bot", "history");
        return;
      }
      let html = "محفوظات المحادثات:<br>";
      chats.forEach(chat => {
        html += `<div class="history-link" data-id="${chat.id}">${chat.timestamp}</div>`;
      });
      addBubble(html, "bot", "history");
      document.querySelectorAll(".history-link").forEach(link => {
        link.addEventListener("click", () => {
          const chat = chats.find(c => c.id === parseInt(link.dataset.id));
          if (chat) {
            output.innerHTML = chat.content;
            if (settings.autoScroll) {
              output.scrollTop = output.scrollHeight;
            }
            localStorage.setItem("currentChat", chat.content);
          }
        });
      });
    }

    function showSettings() {
      const isDarkMode = document.body.classList.contains("dark-mode");
      const autoScrollChecked = settings.autoScroll ? "checked" : "";
      const html = `
        <div>
          <h3>الإعدادات</h3>
          <label>
            <input type="checkbox" id="autoScroll" ${autoScrollChecked}>
            التمرير التلقائي
          </label><br>
          <label>
            اسم الذكاء الاصطناعي:
            <input type="text" id="aiName" value="${settings.aiName}">
          </label><br>
          <label>
            رسالة الترحيب:
            <input type="text" id="welcomeMessage" value="${settings.welcomeMessage}">
          </label><br>
          <button id="saveSettings">حفظ</button>
        </div>
      `;
      addBubble(html, "bot", "settings");
      document.getElementById("autoScroll").addEventListener("change", (e) => {
        settings.autoScroll = e.target.checked;
        localStorage.setItem("settings", JSON.stringify(settings));
      });
      document.getElementById("aiName").addEventListener("change", (e) => {
        const newName = e.target.value.trim() || "Falafel AI";
        settings.aiName = newName;
        aiNameHeader.textContent = `🤖 ${newName}`;
        localStorage.setItem("settings", JSON.stringify(settings));
      });
      document.getElementById("welcomeMessage").addEventListener("change", (e) => {
        settings.welcomeMessage = e.target.value;
        localStorage.setItem("settings", JSON.stringify(settings));
      });
      document.getElementById("saveSettings").addEventListener("click", () => {
        addBubble("تم حفظ الإعدادات!", "bot", "settings");
      });
    }

    function showLoginForm() {
      const html = `
        <div>
          <h3>تسجيل الدخول</h3>
          <label>
            اسم المستخدم:
            <input type="text" id="username" placeholder="أدخل اسمك">
          </label><br>
          <button id="loginBtn">تسجيل الدخول</button>
        </div>
      `;
      output.innerHTML = "";
      addBubble(html, "bot", "login");
      authBtn.textContent = "🚪 تسجيل الدخول";
      authBtn.classList.remove("text-red-400", "hover:text-red-600");
      authBtn.classList.add("text-green-400", "hover:text-green-600");
      toggleUI(false);

      document.getElementById("loginBtn").addEventListener("click", () => {
        const username = document.getElementById("username").value.trim();
        if (username) {
          localStorage.setItem("user", username);
          output.innerHTML = "";
          addBubble(`مرحبًا بك في ${settings.aiName}! 😊 مرحبًا ${username}!`, "bot");
          authBtn.textContent = "🚪 تسجيل الخروج";
          authBtn.classList.remove("text-green-400", "hover:text-green-600");
          authBtn.classList.add("text-red-400", "hover:text-red-600");
          toggleUI(true);
          loadChat();
        } else {
          addBubble("يرجى إدخال اسم مستخدم.", "bot", "login");
        }
      });
    }

    function toggleUI(isLoggedIn) {
      input.disabled = !isLoggedIn;
      sendBtn.disabled = !isLoggedIn;
      clearChatBtn.disabled = !isLoggedIn;
      newChatBtn.disabled = !isLoggedIn;
      historyBtn.disabled = !isLoggedIn;
      settingsBtn.disabled = !isLoggedIn;
      jokeBtn.disabled = !isLoggedIn;
      tipBtn.disabled = !isLoggedIn;
      timeBtn.disabled = !isLoggedIn;
      capitalBtn.disabled = !isLoggedIn;
      currencyBtn.disabled = !isLoggedIn;
      mathBtn.disabled = !isLoggedIn;
    }

    sendBtn.addEventListener("click", () => {
      const message = input.value;
      reply(message);
      input.value = "";
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendBtn.click();
      }
    });

    function setTheme(isDark) {
      document.body.classList.toggle("dark-mode", isDark);
      document.body.classList.toggle("light-mode", !isDark);
      themeToggle.textContent = isDark ? "🌙" : "☀️";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme !== "light");

    themeToggle.addEventListener("click", () => {
      const isDark = document.body.classList.contains("dark-mode");
      setTheme(!isDark);
    });

    clearChatBtn.addEventListener("click", () => {
      output.innerHTML = "";
      localStorage.removeItem("currentChat");
      const user = localStorage.getItem("user");
      addBubble(`مرحبًا بك في ${settings.aiName}! 😊 مرحبًا ${user}!`, "bot");
    });

    newChatBtn.addEventListener("click", () => {
      saveChatToHistory();
      output.innerHTML = "";
      localStorage.setItem("currentChat", "");
      const user = localStorage.getItem("user");
      addBubble(`مرحبًا بك في ${settings.aiName}! 😊 مرحبًا ${user}!`, "bot");
    });

    historyBtn.addEventListener("click", () => {
      showChatHistory();
    });

    settingsBtn.addEventListener("click", () => {
      showSettings();
    });

    authBtn.addEventListener("click", () => {
      if (localStorage.getItem("user")) {
        localStorage.clear();
        setTheme(true); // Reset to dark mode
        settings.aiName = "Falafel AI"; // Reset AI name
        localStorage.setItem("settings", JSON.stringify(settings));
        aiNameHeader.textContent = ` ${settings.aiName}`;
        showLoginForm();
      } else {
        showLoginForm();
      }
    });

    // Command button event listeners
    jokeBtn.addEventListener("click", () => reply("نكتة"));
    tipBtn.addEventListener("click", () => reply("نصيحة"));
    timeBtn.addEventListener("click", () => reply("الوقت"));
    capitalBtn.addEventListener("click", () => {
      input.value = "عاصمة ";
      input.focus();
    });
    currencyBtn.addEventListener("click", () => {
      input.value = "عملة ";
      input.focus();
    });
    mathBtn.addEventListener("click", () => {
      input.value = "حساب ";
      input.focus();
    });

    // Load saved settings
    const savedSettings = JSON.parse(localStorage.getItem("settings") || "{}");
    settings = { ...settings, ...savedSettings };
    aiNameHeader.textContent = `🤖 ${settings.aiName}`;

    // Initialize login state
    if (!localStorage.getItem("user")) {
      showLoginForm();
    } else {
      toggleUI(true);
      loadChat();
    }

    output.addEventListener("DOMSubtreeModified", saveChat);
  });