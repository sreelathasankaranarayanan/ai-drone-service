document.getElementById("leave-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const start = document.getElementById("start-date").value;
  const end = document.getElementById("end-date").value;
  const reason = document.getElementById("reason").value;

  alert(`Leave request submitted:\nFrom: ${start}\nTo: ${end}\nReason: ${reason}`);
  this.reset();
});

function uploadDocuments() {
  const files = document.getElementById("upload-doc").files;
  if (files.length === 0) {
    alert("Please select a file to upload.");
    return;
  }
 function toggleChatbot() {
  const body = document.querySelector('.chatbot-body');
  const input = document.querySelector('.chatbot-input');
  const isVisible = body.style.display === 'flex';
  body.style.display = isVisible ? 'none' : 'flex';
  input.style.display = isVisible ? 'none' : 'flex';
}

function handleChat(e) {
  if (e.key === 'Enter') sendChat();
}

function sendChat() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if (!msg) return;

  addMessage(msg, 'user');
  input.value = '';
  setTimeout(() => {
    const response = getBotResponse(msg);
    addMessage(response, 'bot');
  }, 500);
}

function addMessage(text, type) {
  const chat = document.getElementById("chat-body");
  const msgDiv = document.createElement("div");
  msgDiv.className = `${type}-msg`;
  msgDiv.textContent = text;
  chat.appendChild(msgDiv);
  chat.scrollTop = chat.scrollHeight;
}

function getBotResponse(msg) {
  const lower = msg.toLowerCase();
  if (lower.includes("leave")) return "Employees are entitled to 18 days of paid leave per year.";
  if (lower.includes("holiday")) return "Company holidays include national holidays and 5 floating days.";
  if (lower.includes("benefit")) return "Benefits include health insurance, wellness programs, and remote work options.";
  if (lower.includes("work from home")) return "WFH is available up to 3 days a week with manager approval.";
  return "Sorry, I don't have information on that. Please contact HR directly.";
}

