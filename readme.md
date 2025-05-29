
# ⚡️ WuzAPI Server Template para EasyPanel 🚀

🎯 Este repositorio contiene un **template JSON listo para EasyPanel** que despliega automáticamente:

- 🟩 `wuzapi-server`: API avanzada para WhatsApp
- 🐘 `PostgreSQL`: Base de datos lista para producción

Todo esto en cuestión de segundos con EasyPanel 🚀

---

## 🧰 Servicios incluidos

### 🟢 1. `wuzapi-server`
📡 Servidor principal de WuzAPI

- 📦 Imagen: `setupautomatizado/wuzapi-server:latest`
- 🌐 Puerto: `8080`
- ⚙️ Variables de entorno:
  - 🔑 `WUZAPI_ADMIN_TOKEN`: Token de administrador
  - 🧑‍💻 `DB_USER`, `DB_PASSWORD`: Acceso a la DB
  - 📛 `DB_NAME`: Nombre del proyecto (dinámico)
  - 🌍 `DB_HOST`: Dirección interna del contenedor
  - 🕓 `TZ`: Zona horaria
  - 🔁 `WEBHOOK_FORMAT`: json
  - 📱 `SESSION_DEVICE_NAME`: Nombre del dispositivo WhatsApp

---

### 🐘 2. `wuzapi-server-db`
🔒 Contenedor con PostgreSQL seguro y preconfigurado.

- 👤 Usuario: `postgres`
- 🔐 Contraseña: `wuzapi`
- 🗂️ Base de datos: Se crea automáticamente con el nombre del proyecto (`$(PROJECT_NAME)`)

---

## ⚙️ ¿Cómo usar este template?

1. ✨ Entra a tu panel de [EasyPanel](https://easypanel.io/)
2. ➕ Crea un nuevo proyecto o selecciona uno existente
3. 🧩 Ve a **Templates** → pulsa **+ Template**
4. 📋 Pega el contenido del archivo `template.json` de este repo
5. ✅ Guarda y ejecuta tu stack en segundos

---

## 📎 Ejemplo de uso (ENV)

```env
WUZAPI_ADMIN_TOKEN=H4Zbhw72PBKdTIgS
DB_USER=postgres
DB_PASSWORD=wuzapi
DB_NAME=$(PROJECT_NAME)
DB_HOST=$(PROJECT_NAME)_wuzapi-server-db
DB_PORT=5432
TZ=America/Sao_Paulo
WEBHOOK_FORMAT=json
SESSION_DEVICE_NAME=WuzAPI
```

---

## 💬 ¿Preguntas?

Abre un issue o contáctanos. ¡Estamos para ayudarte! 🛠️

---

## 🧠 Créditos

Proyecto basado en [WuzAPI](https://github.com/setupautomatizado/wuzapi-server) por [Setup Automatizado].

---

## 🗂️ Licencia

📝 MIT License
