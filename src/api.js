// export const fetchPlans = async () => {
//   const res = await fetch("/api/plans");
//   return res.json();
// };

// export const fetchSpecifications = async () => {
//   const res = await fetch("/api/specifications");
//   return res.json();
// };

// export const fetchAnnouncements = async () => {
//   const res = await fetch("/api/announcements");
//   return res.json();
// };

// export const trackSelectedItems = async (items) => {
//   const res = await fetch("/api/track", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ items }),
//   });
//   return res.json();
// };

const mockPlans = [
  { id: 1, name: "발주계획 - 문화도시 사인물 제작", type: "발주계획" },
  { id: 2, name: "발주계획 - 구례군 조형물 설치", type: "발주계획" },
];

const mockSpecifications = [
  { id: 3, name: "사전규격 - 청주시 조형물 사전규격", type: "사전규격" },
  { id: 4, name: "사전규격 - 구례군 사전규격", type: "사전규격" },
];

const mockAnnouncements = [
  { id: 5, name: "입찰공고 - 광화문광장 UHPC화분 제작", type: "입찰공고" },
  { id: 6, name: "입찰공고 - 태안해안국립공원 조형물", type: "입찰공고" },
];

export const fetchPlans = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(mockPlans), 500));
};

export const fetchSpecifications = async () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(mockSpecifications), 500)
  );
};

export const fetchAnnouncements = async () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(mockAnnouncements), 500)
  );
};

export const trackSelectedItems = async (items) => {
  console.log("추적할 항목:", items);
  return new Promise((resolve) =>
    setTimeout(() => resolve({ success: true }), 1000)
  );
};
