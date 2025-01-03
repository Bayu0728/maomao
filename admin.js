const API_URL = "https://example.com/api/status"; // 替換為真實 API 地址

document.getElementById("incrementButton").addEventListener("click", async () => {
  await fetch(`${API_URL}/increment`, { method: "POST" });
});

document.getElementById("resetButton").addEventListener("click", async () => {
  await fetch(`${API_URL}/reset`, { method: "POST" });
});

document.getElementById("updateGroupsButton").addEventListener("click", async () => {
  const newGroupCount = document.getElementById("groupInput").value;
  await fetch(`${API_URL}/updateGroups`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ remainingGroups: newGroupCount }),
  });
});
