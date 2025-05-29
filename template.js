{
  "services": [
    {
      "type": "app",
      "data": {
        "serviceName": "wuzapi-server",
        "env": "WUZAPI_ADMIN_TOKEN=H4Zbhw72PBKdTIgS\nDB_USER=postgres\nDB_PASSWORD=wuzapi\nDB_NAME=$(PROJECT_NAME)\nDB_HOST=$(PROJECT_NAME)_wuzapi-server-db\nDB_PORT=5432\nTZ=America/Sao_Paulo\nWEBHOOK_FORMAT=json\nSESSION_DEVICE_NAME=WuzAPI",
        "source": {
          "type": "image",
          "image": "setupautomatizado/wuzapi-server:latest"
        },
        "domains": [
          {
            "host": "$(EASYPANEL_DOMAIN)",
            "port": 8080
          }
        ]
      }
    },
    {
      "type": "postgres",
      "data": {
        "serviceName": "wuzapi-server-db",
        "password": "wuzapi"
      }
    }
  ]
}
