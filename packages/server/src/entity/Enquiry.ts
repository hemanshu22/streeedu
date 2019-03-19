import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity("enquiry")
export class Enquiry extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 255 })
  name: string;

  @Column("varchar", { length: 255 })
  email: string;

  @Column("varchar", { length: 255 })
  school: string;

  @Column("varchar", { length: 255 })
  parentname: string;

  @Column("varchar", { length: 255 })
  area: string;

  @Column("int")
  mobile: number;

  @Column("varchar", { length: 255 })
  grade: string;

  @Column("varchar", { length: 510 })
  enquiry: string;
}
