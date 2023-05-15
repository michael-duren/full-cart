using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class UpdateGroceryListDetail : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GroceryListDetails_GroceryLists_GroceryListId",
                table: "GroceryListDetails");

            migrationBuilder.AlterColumn<Guid>(
                name: "GroceryListId",
                table: "GroceryListDetails",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "TEXT");

            migrationBuilder.AddForeignKey(
                name: "FK_GroceryListDetails_GroceryLists_GroceryListId",
                table: "GroceryListDetails",
                column: "GroceryListId",
                principalTable: "GroceryLists",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GroceryListDetails_GroceryLists_GroceryListId",
                table: "GroceryListDetails");

            migrationBuilder.AlterColumn<Guid>(
                name: "GroceryListId",
                table: "GroceryListDetails",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_GroceryListDetails_GroceryLists_GroceryListId",
                table: "GroceryListDetails",
                column: "GroceryListId",
                principalTable: "GroceryLists",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
