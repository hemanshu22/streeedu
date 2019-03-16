import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity("workshop")
export class Workshop extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 255 })
  name: string;

  @Column("varchar", { length: 255 })
  email: string;

  @Column("varchar", { length: 255 })
  school: string;

  @Column("varchar", { length: 255 })
  classs: string;

  @Column("varchar", { length: 255 })
  area: string;

  @Column("int")
  mobile: number;
}
