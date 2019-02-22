import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity("urls")
export class Url extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 255 })
  desc: string;

  @Column("int")
  desc_number: number;
}
