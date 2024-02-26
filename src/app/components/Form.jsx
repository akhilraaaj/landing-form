import MainForm from "./form/MainForm";

function App() {
  return (
    <div className="md:px-28 px-4 py-6">
      <div className="rounded-xl shadow-xl border">
        <h1 className="px-4 md:px-8 md:py-4 py-3 m-0 text-xl font-extrabold">Complete Student Profile</h1>
        <hr className="border" />
        <div className="md:px-12 md:py-6 px-6 py-8">
          <MainForm />
        </div>
      </div>
    </div>
  );
}

export default App;
