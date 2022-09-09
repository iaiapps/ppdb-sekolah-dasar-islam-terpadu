<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('setting_ppdb', function (Blueprint $table) {
            $table->id();
            $table->string('tahun_ajaran');
            $table->integer('gelombang');
            $table->boolean('is_active');
            $table->string('start_date');
            $table->string('end_date');
        });
    }
    public function down()
    {
        Schema::dropIfExists('setting_ppdb');
    }
};
