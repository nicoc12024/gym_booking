import Switch from "@mui/material/Switch";
import useProfile from "../../utils/hooks/useProfile";

const Profile = () => {
  const {
    formData,
    isEditing,
    handleChange,
    handleEdit,
    handleSave,
    handleCancel,
    handleDeleteProfile,
  } = useProfile();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md my-6">
      <h2 className="text-xl font-semibold mb-4">Información Personal</h2>
      <form onSubmit={handleSubmit} className="space-y-4 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              disabled={!isEditing}
              type="text"
              placeholder="First name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Apellido</label>
            <input
              disabled={!isEditing}
              type="text"
              placeholder="Last name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Letra del Apartamento
          </label>
          <input
            disabled={!isEditing}
            type="text"
            name="apartment_letter"
            value={formData.apartment_letter}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Piso</label>
          <input
            disabled={!isEditing}
            type="text"
            name="floor"
            value={formData.floor}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Número de Teléfono
          </label>
          <input
            disabled={!isEditing}
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            disabled
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          {!isEditing ? (
            <button
              type="button"
              onClick={handleEdit}
              className="py-2 px-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Editar datos
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={handleCancel}
                className="py-2 px-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Guardar cambios
              </button>
            </>
          )}
        </div>
      </form>

      {/* Preferencias email */}
      <div className="py-6 border-t">
        <h2 className="text-xl font-semibold mb-4">Preferencias de Email</h2>
        <div className="space-y-4">
          <div className="py-7 px-5 flex flex-col gap-3 items-start sm:flex-row sm:justify-between sm:items-center border rounded-lg shadow-sm">
            <div>
              <h3 className="font-semibold">
                Enviar notificación al confirmar o cancelar una reserva
              </h3>
              <p className="text-sm text-gray-700">
                Recibirás un correo electrónico al confirmar o cancelar una reserva.
              </p>
            </div>
            <Switch />
          </div>
        </div>
      </div>

      {/* Eliminar cuenta */}
      <div className="pt-6 border-t">
        <h2 className="text-xl font-semibold mb-4">Zona de Peligro</h2>
        <div className="space-y-4">
          <div className="py-7 px-5 flex flex-col gap-3 items-start sm:flex-row sm:justify-between sm:items-center border rounded-lg shadow-sm">
            <div>
              <h3 className="font-semibold text-red-600">Eliminar cuenta</h3>
              <p className="text-sm text-gray-700">
                Eliminar esta cuenta de manera permanente. Esta acción no se puede
                deshacer.
              </p>
            </div>
            <button
              onClick={handleDeleteProfile}
              className="py-2 text-nowrap px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Eliminar cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
