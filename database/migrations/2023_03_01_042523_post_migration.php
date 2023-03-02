<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //Create Post Database Table
        Schema::table("posts", function (Blueprint $table) {
            $table->id();
            // user ID from user table
            $table->integer("userID", false, false);
            $table->string("caption", 255);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Drop Post Database
        Schema::dropIfExists("posts");
    }
};
