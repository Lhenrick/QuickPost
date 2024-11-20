export default function Skills({ skillName }) {
  return (
    <section className="flex font-bold text-white gap-2 mt-1 items-center">
      <img
        src="./bicepsIcon.png"
        alt="BicepsIcon"
        className="border-2 rounded-xl border-white"
      />
      <p>{skillName}</p>
    </section>
  );
}
