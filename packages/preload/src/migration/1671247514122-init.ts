import { MigrationInterface, QueryRunner } from "typeorm";

export class init1671247514122 implements MigrationInterface {
    name = 'init1671247514122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "personas" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" text NOT NULL, "email" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "tareas" ("Id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "titulo" text NOT NULL, "fecha_inicio" text NOT NULL, "fecha_vencimiento" text NOT NULL, "prioridad" text NOT NULL, "estado" text NOT NULL, "descripcion" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "tareas_personas_personas" ("tareasId" integer NOT NULL, "personasId" integer NOT NULL, PRIMARY KEY ("tareasId", "personasId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_27f9ac86c690e344bf1f323dec" ON "tareas_personas_personas" ("tareasId") `);
        await queryRunner.query(`CREATE INDEX "IDX_1638778e1833cc015462471973" ON "tareas_personas_personas" ("personasId") `);
        await queryRunner.query(`DROP INDEX "IDX_27f9ac86c690e344bf1f323dec"`);
        await queryRunner.query(`DROP INDEX "IDX_1638778e1833cc015462471973"`);
        await queryRunner.query(`CREATE TABLE "temporary_tareas_personas_personas" ("tareasId" integer NOT NULL, "personasId" integer NOT NULL, CONSTRAINT "FK_27f9ac86c690e344bf1f323dec4" FOREIGN KEY ("tareasId") REFERENCES "tareas" ("Id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_1638778e1833cc015462471973a" FOREIGN KEY ("personasId") REFERENCES "personas" ("id") ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY ("tareasId", "personasId"))`);
        await queryRunner.query(`INSERT INTO "temporary_tareas_personas_personas"("tareasId", "personasId") SELECT "tareasId", "personasId" FROM "tareas_personas_personas"`);
        await queryRunner.query(`DROP TABLE "tareas_personas_personas"`);
        await queryRunner.query(`ALTER TABLE "temporary_tareas_personas_personas" RENAME TO "tareas_personas_personas"`);
        await queryRunner.query(`CREATE INDEX "IDX_27f9ac86c690e344bf1f323dec" ON "tareas_personas_personas" ("tareasId") `);
        await queryRunner.query(`CREATE INDEX "IDX_1638778e1833cc015462471973" ON "tareas_personas_personas" ("personasId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_1638778e1833cc015462471973"`);
        await queryRunner.query(`DROP INDEX "IDX_27f9ac86c690e344bf1f323dec"`);
        await queryRunner.query(`ALTER TABLE "tareas_personas_personas" RENAME TO "temporary_tareas_personas_personas"`);
        await queryRunner.query(`CREATE TABLE "tareas_personas_personas" ("tareasId" integer NOT NULL, "personasId" integer NOT NULL, PRIMARY KEY ("tareasId", "personasId"))`);
        await queryRunner.query(`INSERT INTO "tareas_personas_personas"("tareasId", "personasId") SELECT "tareasId", "personasId" FROM "temporary_tareas_personas_personas"`);
        await queryRunner.query(`DROP TABLE "temporary_tareas_personas_personas"`);
        await queryRunner.query(`CREATE INDEX "IDX_1638778e1833cc015462471973" ON "tareas_personas_personas" ("personasId") `);
        await queryRunner.query(`CREATE INDEX "IDX_27f9ac86c690e344bf1f323dec" ON "tareas_personas_personas" ("tareasId") `);
        await queryRunner.query(`DROP INDEX "IDX_1638778e1833cc015462471973"`);
        await queryRunner.query(`DROP INDEX "IDX_27f9ac86c690e344bf1f323dec"`);
        await queryRunner.query(`DROP TABLE "tareas_personas_personas"`);
        await queryRunner.query(`DROP TABLE "tareas"`);
        await queryRunner.query(`DROP TABLE "personas"`);
    }

}
