package main

import (
	"go_admin/models"
	"go_admin/router"
)

func main() {
	//初始化gorm.db
	models.InitGormDB()
	r := router.App()
	r.Run(":8080")
}
