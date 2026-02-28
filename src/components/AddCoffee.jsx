const AddCoffee = () => {
  return (
    <aside className="p-24 text-center space-y-4">
      <h1 className="font-bold text-5xl text-amber-500">Add Coffee</h1>
      <p className="font-extralight text-base mb-10">
        To add coffee to your routine, start by choosing a type like instant
        (e.g., Nescafé Classic) or ground beans. A standard, balanced cup uses 1
        teaspoon of instant coffee for every 6 ounces of hot water. You can
        customize it by adding milk, sugar, syrups, or spices like cinnamon
      </p>

      <form className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Coffee Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Chef</label>
            <input
              type="text"
              name="chef"
              className="input w-full"
              placeholder="Chef Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              name="supplier"
              className="input w-full"
              placeholder="Supplier Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              name="taste"
              className="input w-full"
              placeholder="Taste Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Catagory</label>
            <input
              type="text"
              name="catagory"
              className="input w-full"
              placeholder="Catagory Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              className="input w-full"
              placeholder="Details Name"
            />
          </fieldset>
        </div>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-6">
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="input w-full"
            placeholder="Photo URL"
          />
        </fieldset>

        <input
          type="submit"
          className="btn w-full bg-amber-500"
          value="Add Coffee"
        />
      </form>
    </aside>
  );
};
export default AddCoffee;
